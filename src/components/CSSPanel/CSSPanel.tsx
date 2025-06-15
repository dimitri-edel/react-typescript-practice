import { useLocale } from '../LocaleContext';
import { getTranslation } from '../../i18n/i18n';
import styles from './CSSPanel.module.css';

interface CSSPanelProps {
  scope: string;
  id: string;
}

// Simple CSS syntax highlighter using regex
function highlightCSS(code: string): string {
  // Escape HTML special characters first
  code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // Comments
  code = code.replace(/\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\//g, () => `<span class=${styles.comment}>$&</span>`);
  // Selectors (class, id, element)
  code = code.replace(/([.#]?[a-zA-Z_][\w\-]*)\s*\{/g, (_m, p1) => `<span class=${styles.selector}>${p1}</span>{`);
  // Properties
  code = code.replace(/([a-zA-Z\-]+)(\s*:\s*)/g, (_m, p1, p2) => `<span class=${styles.property}>${p1}</span>${p2}`);
  // Values (strings, numbers, colors)
  code = code.replace(/(:\s*)([^;\n]+)(;?)/g, (_m, p1: string, p2: string, p3: string) => {
    let value = p2
      .replace(/#[0-9a-fA-F]{3,8}/g, (m: string) => `<span class=${styles.color}>${m}</span>`)
      .replace(/\b\d+(px|em|rem|%)?\b/g, (m: string) => `<span class=${styles.number}>${m}</span>`)
      .replace(/(['"])(.*?)(['"])/g, (_qm: string, q1: string, val: string, q2: string) => `<span class=${styles.string}>${q1}${val}${q2}</span>`);
    return `${p1}${value}${p3}`;
  });
  // Braces
  code = code.replace(/[{}]/g, (m) => `<span class=${styles.brace}>${m}</span>`);
  return code;
}

export default function CSSPanel({ scope, id }: CSSPanelProps) {
  const { locale } = useLocale();
  const code = getTranslation(scope, id, locale);
  return (
    <div className={styles.panelBg}>
      <pre className={styles.code}>
        <code dangerouslySetInnerHTML={{ __html: highlightCSS(code) }} />
      </pre>
    </div>
  );
}
