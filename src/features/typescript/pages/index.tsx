import { getTranslation } from '../../../i18n/i18n';
import { useLocale } from '../../../components/LocaleContext';
import {TypeScriptPanel} from '../../../components/TSPanel/TypeScriptPanel';


export function Index() {
    const { locale } = useLocale();
    const title = getTranslation('main', 'main_title', locale,  undefined, "typescript");
    const description = getTranslation('main', 'main_description', locale,  undefined, "typescript");
    const typesafety_title = getTranslation('main', 'typesafety_title', locale,  undefined, "typescript");
    const typesafety_description = getTranslation('main', 'typesafety_description', locale,  undefined, "typescript");

    return (
        <div className="flex min-h-screen pt-20">
            <div className="flex flex-col flex-1 items-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-8">{description}</p>
                <h2 className="text-2xl font-semibold mb-4">{typesafety_title}</h2>
                <p className="text-lg mb-8">{typesafety_description}</p>
                <TypeScriptPanel scope="main" id="typesafety_source_code" feature="typescript" />                
            </div>
        </div>
    );
}