import './App.css'
import type { IUser } from './types/user';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';

function App() {  
  const user: IUser = {
    username: 'john_doe',
    email: 'john_doe@some.com',
    birthdate: new Date('1990-01-01'),
    locale: 'en-US'
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
      </Routes>
    </Router>
  );
}

export default App
