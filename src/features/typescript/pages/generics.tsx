import { getTranslation } from '../../../i18n/i18n';
import { useLocale } from '../../../components/LocaleContext';
import { TypeScriptPanel } from '../../../components/TSPanel/TypeScriptPanel';

export default function Generics() {
    const { locale } = useLocale();
    const title = getTranslation('generics', 'title', locale, undefined, "typescript");
    const intro_paragraph_1 = getTranslation('generics', 'intro_paragraph_1', locale, undefined, "typescript");
    const intro_paragraph_2 = getTranslation('generics', 'intro_paragraph_2', locale, undefined, "typescript");
    const section_heading_1 = getTranslation('generics', 'section_heading_1', locale, undefined, "typescript");

    return (
        <div className="flex flex-col flex-1 items-center">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-8">{intro_paragraph_1}</p>
            <p className="text-lg mb-8">{intro_paragraph_2}</p>
            <h2 className="text-2xl font-semibold mb-4">{section_heading_1}</h2>
            <TypeScriptPanel scope="generics" id="code_example" feature="typescript" />
        </div>
    )
}
