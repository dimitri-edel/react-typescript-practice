// Side bar component for TypeScript pages
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function TypeScriptSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <ul>
        <li><Link to="/typescript-page">TypeScript Home</Link></li>
        <li><Link to="/typescript-page/advanced-types">Advanced Types</Link></li>
        <li><Link to="/typescript-page/generics">Generics</Link></li>
        <li><Link to="/typescript-page/decorators">Decorators</Link></li>
        <li><Link to="/typescript-page/mixins">Mixins</Link></li>
        <li><Link to="/typescript-page/utility-types">Utility Types</Link></li>
        <li><Link to="/typescript-page/tsconfig">tsconfig.json</Link></li>
      </ul>      
    </div>
  );
}