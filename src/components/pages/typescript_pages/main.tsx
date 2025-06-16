import { getTranslation } from '../../../i18n/i18n';
import { useLocale } from '../../LocaleContext';
import TypeScriptPanel from '../../TSPanel/TypeScriptPanel';
import TypeScriptSidebar from "./sidebar"

export default function TypeScriptPage() {
    const { locale } = useLocale();
    const title = getTranslation('typescript_page', 'typescript_title', locale);
    const description = getTranslation('typescript_page', 'typescript_description', locale);
    const typesafety_title = getTranslation('typescript_page', 'typesafety_title', locale);
    const typesafety_description = getTranslation('typescript_page', 'typesafety_description', locale);

    return (
        <div className="flex min-h-screen pt-20">
            <TypeScriptSidebar />
            <div className="flex flex-col flex-1 items-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-8">{description}</p>
                <h2 className="text-2xl font-semibold mb-4">{typesafety_title}</h2>
                <p className="text-lg mb-8">{typesafety_description}</p>
                <TypeScriptPanel scope="typescript_page" id="typesafety_source_code" />
            </div>
        </div>
    );
}