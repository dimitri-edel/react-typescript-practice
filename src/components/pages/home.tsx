import { useAuth } from '../AuthContext';
import type { ICaption } from '../../types/i18n';
import { getCaption } from '../../i18n/i18n';

function Home() {
  const { username, isSignedIn } = useAuth();
  const locale = 'en'; // This should be dynamically set based on user preference or browser settings
  const main_title = getCaption('home_page', 'main_title', locale);

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
      <p className="text-lg mb-8">This is the home page.</p>
      <p className="text-gray-500">Signed in as: {username}</p>
    </div>
  );
}

export default Home;