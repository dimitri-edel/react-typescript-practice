// Load captions.json file and export it as a module
import captions from './captions.json';
import type { ICaption } from '../types/i18n';

export function getCaption(scope: string, id: string, locale: string): string {
    const caption = captions.find((c: ICaption) => c.scope === scope && c.id === id && c.locale === locale);
    return caption ? caption.text : '';
}