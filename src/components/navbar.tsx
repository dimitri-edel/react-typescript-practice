import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useLocale } from './LocaleContext';
import { useState } from 'react';
import ConfirmModal from './modals/ConfirmModal';

function NavBar() {
  const { isSignedIn, signOut } = useAuth();
  const { locale, setLocale } = useLocale();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    signOut();
    navigate('/');
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold">MyApp</div>
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-300 hover:text-gray-400 transition-colors">Home</Link>
        <Link to="/about" className="text-gray-300 hover:text-gray-400 transition-colors">About</Link>
        <Link to="/i18n-page" className="text-gray-300 hover:text-gray-400 transition-colors">i18n</Link>
        <Link to="/typescript-page" className="text-gray-300 hover:text-gray-400 transition-colors">TypeScript</Link>
        {isSignedIn ? (
          <button
            onClick={handleLogoutClick}
            className="text-gray-300 hover:text-gray-400 transition-colors bg-transparent border-none cursor-pointer"
            style={{ padding: 0 }}
          >
            Logout
          </button>
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
      {showModal && (
        <ConfirmModal
          scope="logout_page"
          id="confirmation_message"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </nav>
  );
}

export default NavBar;
