import './App.css'
import type { IUser } from './types/user';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import NavBar from './components/navbar';
import Login from './components/pages/login';

function App() {
  const user: IUser = {
    username: 'john_doe',
    email: 'john_doe@some.com',
    birthdate: new Date('1990-01-01'),
    locale: 'en-US'
  };
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App
