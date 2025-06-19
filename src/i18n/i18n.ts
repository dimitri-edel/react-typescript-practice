import defaultTranslations from './translations.json';
import typescriptTranslations from '../features/typescript/i18n/translations.json';
import reactTranslations from '../features/react/i18n/translations.json';
import type { ITranslation } from '../types/i18n';
/*
    * This function retrieves a translation based on the provided scope, id, and locale.
    * It also supports parameter substitution in the translation text.
    *
    * @param {string} scope - The scope of the translation (e.g., 'home_page', 'test').
    * @param {string} id - The unique identifier for the translation within the scope.
    * @param {string} locale - The locale for which the translation is requested (e.g., 'en', 'fr').
    * @param {Array<Record<string, string>>} [paramList] - Optional list of parameters to replace in the translation text.
    * @returns {string} - The translation text with parameters replaced, or an empty string if not found.
    */

export function getTranslation(scope: string, id: string, locale: string, paramList?: Array<Record<string, string>>, feature?: string): string {
    let translations: ITranslation[];
    // if feature is not defined, imports translations from the default translations.json file
    if (!feature) {
        translations = defaultTranslations;
    } else {
        switch (feature) {
            case 'typescript':
                translations = typescriptTranslations;
                break;
            case 'react':
                translations = reactTranslations;
                break;
            default:
                translations = defaultTranslations;
                break;
        }
    }
    const translation = translations.find((c: ITranslation) => c.scope === scope && c.id === id && c.locale === locale);
    if (!translation) return '';
    let text = translation.text;
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