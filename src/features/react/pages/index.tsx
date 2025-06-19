import { getTranslation } from '../../../i18n/i18n';
import { useLocale } from '../../../components/LocaleContext';
import {TypeScriptPanel} from '../../../components/TSPanel/TypeScriptPanel';


export function Index() {
    const { locale } = useLocale();
    return (
        <div className="flex flex-col flex-1 items-center">
            <h1 className="text-4xl font-bold mb-4"> <i className="fa-brands fa-react"></i>React </h1>
        </div>
    );
}