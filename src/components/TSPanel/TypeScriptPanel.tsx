import { useLocale } from '../LocaleContext';
import { getTranslation } from '../../i18n/i18n';
import styles from './TypeScriptPanel.module.css';

interface TypeScriptPanelProps {
  scope: string;
  id: string;
}

// Simple TypeScript syntax highlighter using regex
function highlightTypeScript(code: string): string {
  // Keywords
  code = code.replace(/\b(?:const|let|var|function|return|if|else|for|while|import|from|export|type|interface|extends|implements|class|public|private|protected|static|readonly|new|as|any|void|number|string|boolean|undefined|null|true|false|this|super|constructor)\b/g, '<span class="' + styles.keyword + '">$&</span>');
  // Strings
  code = code.replace(/(['"`])(?:(?=(\\?))\2.)*?\1/g, '<span class="' + styles.string + '">$&</span>');
  // Comments
  code = code.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="' + styles.comment + '">$&</span>');
  // Numbers
  code = code.replace(/\b\d+(?:\.\d+)?\b/g, '<span class="' + styles.number + '">$&</span>');
  // Types (after colon or as)
  code = code.replace(/(:|as)\s*([A-Z][A-Za-z0-9_]*)/g, '$1 <span class="' + styles.type + '">$2</span>');
  // Function names
  code = code.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="' + styles.functionName + '">$1</span>');
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
