// Side bar component for TypeScript pages
interface SidebarProps {
  onIndexClick?: () => void;
  onGenericsClick?: () => void;
}


export default function TypeScriptSidebar({ onIndexClick, onGenericsClick }: SidebarProps) {
  
  return (
    <div className={`sidebar`}>      
      <ul>
        <li onClick={onIndexClick}>Index</li>
        <li onClick={onGenericsClick}>Generics</li>
        {/* <li><Link to="/typescript-page/advanced-types">Advanced Types</Link></li>
        <li><Link to="/typescript-page/decorators">Decorators</Link></li>
        <li><Link to="/typescript-page/mixins">Mixins</Link></li>
        <li><Link to="/typescript-page/utility-types">Utility Types</Link></li>
        <li><Link to="/typescript-page/tsconfig">tsconfig.json</Link></li> */}
      </ul>      
    </div>
  );
}