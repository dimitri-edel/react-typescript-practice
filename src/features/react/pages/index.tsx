import { getTranslation } from '../../../i18n/i18n';
import { useLocale } from '../../../components/LocaleContext';
import {TypeScriptPanel} from '../../../components/TSPanel/TypeScriptPanel';


export function Index() {
    const { locale } = useLocale();
    const title = getTranslation('react_hooks', 'main_title', locale,  undefined, "react");
    const intro_paragraph = getTranslation('react_hooks', 'intro_paragraph', locale,  undefined, "react");
    const section_heading_1 = getTranslation('react_hooks', 'section_heading_1', locale,  undefined, "react");
    

    return (
        <div className="flex flex-col flex-1 items-center">
            <div className="flex flex-col flex-1 items-center">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-8">{intro_paragraph}</p>
                <h2 className="text-2xl font-semibold mb-4">{section_heading_1}</h2>                
                {/* <TypeScriptPanel scope="main" id="typesafety_source_code" feature="react" />                 */}
            </div>
        </div>
    );
}