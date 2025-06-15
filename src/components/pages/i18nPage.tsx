import { getTranslation } from '../../i18n/i18n';
import { useLocale } from '../LocaleContext';
import TypeScriptPanel from '../TSPanel/TypeScriptPanel';

export default function I18nPage() {
  const { locale } = useLocale();
  const title = getTranslation('i18n_page', 'i18n_title', locale);
  const description = getTranslation('i18n_page', 'i18n_description', locale);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{description}</p>
      <TypeScriptPanel scope="i18n_page" id="typescript_source_code" />
    </div>
  );
}
