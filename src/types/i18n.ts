export interface ITranslation {
    scope: string, // e.g., "global", 'home_page", "logout_page"
    id: string, // e.g., "welcome_message", "logout_confirmation"
    text: string, // e.g., "Welcome to the application!", "Are you sure you want to log out?"
    locale: string // e.g., "en", "fr", "es"
}