import { useAuth } from '../AuthContext';

function Home() {
  const { username, isSignedIn } = useAuth();

    if (!isSignedIn) {
        return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-20">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg mb-8">Please log in to continue.</p>
            <a href="/login" className="text-blue-500 hover:underline">
            Log In
            </a>
        </div>
        );
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg mb-8">This is the home page.</p>
      <p className="text-gray-500">Signed in as: {username}</p>
    </div>
  );
}

export default Home;