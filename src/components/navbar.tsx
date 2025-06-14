import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function NavBar() {
  const { isSignedIn } = useAuth();
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">MyApp</div>
      <div className="flex gap-6">
        <Link to="/" className="text-gray-300 hover:text-gray-400 transition-colors">Home</Link>
        <Link to="/about" className="text-gray-300 hover:text-gray-400 transition-colors">About</Link>
        {isSignedIn ? (
          <Link to="/logout" className="text-gray-300 hover:text-gray-400 transition-colors">Logout</Link>
        ) : (
          <Link to="/login" className="text-gray-300 hover:text-gray-400 transition-colors">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
