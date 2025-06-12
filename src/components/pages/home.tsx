function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg mb-8">This is the home page.</p>
      <a href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </a>
    </div>
  );
}

export default Home;