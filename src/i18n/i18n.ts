// Load captions.json file and export it as a module
import captions from './captions.json';
import type { ICaption } from '../types/i18n';

export function getCaption(scope: string, id: string, locale: string, paramList?: Array<Record<string, string>>): string {
    const caption = captions.find((c: ICaption) => c.scope === scope && c.id === id && c.locale === locale);
    if (!caption) return '';
    let text = caption.text;
    if (paramList && paramList.length > 0) {
        for (const param of paramList) {
            for (const key in param) {
                // Replace all occurrences of {key} with the value
                text = text.replace(new RegExp(`\\{${key}\\}`, 'g'), param[key] || '');
            }
        }
    }
    return text;
}