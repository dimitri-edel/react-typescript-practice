import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Logout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();

  // Get the previous page from location state, fallback to home
  const from = (location.state && location.state.from) || '/';

  const handleNo = () => {
    navigate(from);
  };

  const handleYes = () => {
    signOut();
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-2xl font-bold mb-4">Are you sure you want to sign out?</h1>
      <div className="flex gap-4">
        <button onClick={handleYes} className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700">Yes</button>
        <button onClick={handleNo} className="bg-gray-400 text-white rounded px-4 py-2 hover:bg-gray-500">No</button>
      </div>
    </div>
  );
}

export default Logout;
