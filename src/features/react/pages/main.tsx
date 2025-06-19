import TypeScriptSidebar from "../components/sidebar"
import { Index } from "./index";
import { useState } from 'react';
import { Hooks } from './hooks';


export default function ReactPage() {
    const [selected, setSelected] = useState<'index' | 'hooks'>('index');

    let content;
    if (selected === 'index') {
        content = <Index />;
    } else if (selected === 'hooks') {
        content = <Hooks />;
    }

    return (
        <div className="flex min-h-screen mt-[10px]">
            <TypeScriptSidebar
                onIndexClick={() => setSelected('index')}
                onHooksClick={() => setSelected('hooks')}
                selected={selected}
            />
            <div className="flex flex-col flex-1 items-center">
                {content}
            </div>
        </div>
    )
}