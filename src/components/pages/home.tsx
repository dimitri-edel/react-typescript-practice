import { useAuth } from '../AuthContext';
import { getTranslation } from '../../i18n/i18n';

function Home() {
  const { username, isSignedIn } = useAuth();
  const locale = 'en'; // This should be dynamically set based on user preference or browser settings
  const main_title = getTranslation('home_page', 'main_title', locale);
  const greeting = getTranslation('home_page', 'greeting', locale, [{ username: username }]);
  const test_text = getTranslation('test', 'test_message', locale, [{ username: username }, { test_text : "this is it."}]);

    if (!isSignedIn) {
        return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
            <h1 className="text-4xl font-bold mb-4">{main_title}</h1>
            <p className="text-lg mb-8">Please log in to continue.</p>
            <a href="/login" className="text-blue-500 hover:underline">
            Log In
            </a>
        </div>
        );
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-4">{main_title}</h1>
      <p className="text-lg mb-8">{greeting}</p>
      <p className="text-gray-500">Signed in as: {username}</p>
      <p className="text-lg mt-4">{test_text}</p>
    </div>
  );
}

export default Home;