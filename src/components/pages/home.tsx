import type { IUser } from '../../types/user';

function Home(props: { user: IUser }) {
  const { user } = props;
    if (!user) {
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
      <a href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </a>
    </div>
  );
}

export default Home;