import TypeScriptSidebar from "../components/sidebar"
import {TypeScriptPanel} from '../../../components/TSPanel/TypeScriptPanel';
import {Index} from "./index";
import { useState } from 'react';
import Generics from './generics';

export default function TypeScriptPage() {
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