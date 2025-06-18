import TypeScriptSidebar from "../components/sidebar"
import { getTranslation } from '../../../i18n/i18n';
import { useLocale } from '../../../components/LocaleContext';
import {TypeScriptPanel} from '../../../components/TSPanel/TypeScriptPanel';
import {Index} from "./index";
import { useEffect } from 'react';
import { useState } from 'react';
import Generics from './generics';

export default function TypeScriptPage() {
    const { locale } = useLocale();
    const [selected, setSelected] = useState<'index' | 'generics'>('index');
    
    let content;
    if (selected === 'index') {
        content = <Index />;
    } else if (selected === 'generics') {
        content = <Generics />;
    }
    
    return (
        <div className="flex min-h-screen pt-20">
            <TypeScriptSidebar
                onIndexClick={() => setSelected('index')}
                onGenericsClick={() => setSelected('generics')}
            />
            <div className="flex flex-col flex-1 items-center">
                {content}
                <TypeScriptPanel scope="typescript_page" id="typescript_source_code" />
            </div>
        </div>
    )
}