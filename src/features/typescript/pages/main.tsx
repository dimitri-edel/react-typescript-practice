import TypeScriptSidebar from "../components/sidebar"
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
        <div className="flex min-h-screen mt-[10px]">
            <TypeScriptSidebar
                onIndexClick={() => setSelected('index')}
                onGenericsClick={() => setSelected('generics')}
                selected={selected}
            />
            <div className="flex flex-col flex-1 items-center">
                {content}                
            </div>
        </div>
    )
}