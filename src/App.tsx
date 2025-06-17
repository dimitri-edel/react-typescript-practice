import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import NavBar from './components/navbar';
import Login from './components/pages/login';
import Logout from './components/pages/logout';
import I18nPage from './components/pages/i18nPage'
import TypeScriptPage from './features/typescript/pages/main';

function App() {  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/i18n-page" element={<I18nPage />} />
        <Route path="/typescript-page" element={<TypeScriptPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App
