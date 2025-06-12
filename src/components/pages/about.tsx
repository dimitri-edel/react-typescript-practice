// import React from 'react';
import { useAuth } from '../AuthContext';

function About() {
  const { username } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-8">This is the about page. Here you can learn more about our website and team.</p>
      <a href="/" className="text-blue-500 hover:underline">
        Back to Home
      </a>
      <p className="mt-8 text-gray-500">Signed in as: {username || 'Guest'}</p>
    </div>
  );
}

export default About;
