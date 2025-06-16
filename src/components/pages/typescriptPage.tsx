import { getTranslation } from '../../i18n/i18n';
import { useLocale } from '../LocaleContext';
import TypeScriptPanel from '../TSPanel/TypeScriptPanel';

export default function TypeScriptPage() {
  const { locale } = useLocale();
  const title = getTranslation('typescript_page', 'typescript_title', locale);
  const description = getTranslation('typescript_page', 'typescript_description', locale);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>      
      <p className="text-lg mb-8">{description}</p>
      {/* <TypeScriptPanel scope="typescript_page" id="typescript_source_code" /> */}
    </div>
  );
}