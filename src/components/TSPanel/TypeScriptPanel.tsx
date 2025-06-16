import { useLocale } from '../LocaleContext';
import { getTranslation } from '../../i18n/i18n';
import styles from './TypeScriptPanel.module.css';

interface TypeScriptPanelProps {
  scope: string;
  id: string;
}

// Simple TypeScript syntax highlighter using regex
function highlightTypeScript(code: string): string {
  // Escape HTML special characters first
  code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Find all comments and temporarily replace them with placeholders
  const commentRegex = /(\/\/.*|\/\*[\s\S]*?\*\/)/g;
  const comments: string[] = [];
  code = code.replace(commentRegex, (match) => {
    comments.push(match);
    return `__COMMENT_PLACEHOLDER_${comments.length - 1}__`;
  });

  // Highlight TypeScript keywords
  code = code.replace(/\b(?:default|const|let|var|function|return|if|else|for|while|import|from|export|type|interface|extends|implements|class|public|private|protected|static|readonly|new|as|any|void|number|string|boolean|undefined|null|true|false|this|super|constructor)\b/g, (match) => `<span class=${styles.keyword}>${match}</span>`);
  // Highlight string literals
  code = code.replace(/(['"]).*?(?<!\\)\1/g, (match) => `<span class=${styles.string}>${match}</span>`);
  // Highlight numbers
  code = code.replace(/\b\d+(?:\.\d+)?\b/g, (match) => `<span class=${styles.number}>${match}</span>`);
  // Highlight types (after colon or 'as')
  code = code.replace(/(:|as)\s*([A-Z][A-Za-z0-9_]*)/g, (_m, p1, p2) => `${p1} <span class=${styles.type}>${p2}</span>`);
  // Highlight function names (before parentheses)
  code = code.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, (match) => `<span class=${styles.functionName}>${match}</span>`);
  // Highlight HTML/JSX tags and their attributes
  code = code.replace(/(&lt;\/?)([a-zA-Z0-9\-]+)(.*?)(\/?&gt;)/g, (_m, p1, p2, p3, p4) => {
    // Highlight tag name
    let tag = `${p1}<span class=${styles.htmlTag}>${p2}</span>`;
    // Highlight attributes
    if (p3) {
      tag += p3.replace(/([a-zA-Z_:][a-zA-Z0-9_\-:.]*)(=)(["'])(.*?)(["'])/g, (_am: string, attr: string, eq: string, q1: string, val: string, q2: string) => {
        return `<span class=${styles.htmlAttr}>${attr}</span>${eq}<span class=${styles.htmlAttrValue}>${q1}${val}${q2}</span>`;
      });
    }
    tag += p4;
    return tag;
  });

  // Restore comments, wrapping them in a <span> with a special class and style to override all others
  code = code.replace(/__COMMENT_PLACEHOLDER_(\d+)__/g, (_m, idx) => {
    return `<span class="${styles.comment}" style="all:unset;color:#6a9955;font-style:italic;">${comments[Number(idx)]}</span>`;
  });

  return code;
}

export default function TypeScriptPanel({ scope, id }: TypeScriptPanelProps) {
  const { locale } = useLocale();
  const code = getTranslation(scope, id, locale);
  return (
    <div className={styles.panelBg}>
      <pre className={styles.code}>
        <code dangerouslySetInnerHTML={{ __html: highlightTypeScript(code) }} />
      </pre>
    </div>
  );
}
