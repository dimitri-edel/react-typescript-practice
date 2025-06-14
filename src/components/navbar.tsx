import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useLocale } from './LocaleContext';

function NavBar() {
  const { isSignedIn } = useAuth();
  const { locale, setLocale } = useLocale();
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">MyApp</div>
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-300 hover:text-gray-400 transition-colors">Home</Link>
        <Link to="/about" className="text-gray-300 hover:text-gray-400 transition-colors">About</Link>
        {isSignedIn ? (
          <Link to="/logout" className="text-gray-300 hover:text-gray-400 transition-colors">Logout</Link>
        ) : (
          <Link to="/login" className="text-gray-300 hover:text-gray-400 transition-colors">Login</Link>
        )}
        <select
          className="ml-4 px-2 py-1 rounded bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none"
          value={locale}
          onChange={e => setLocale(e.target.value)}
        >
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </nav>
  );
}

export default NavBar;
