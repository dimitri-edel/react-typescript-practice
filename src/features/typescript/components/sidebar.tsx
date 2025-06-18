// Side bar component for TypeScript pages
interface SidebarProps {
  onIndexClick?: () => void;
  onGenericsClick?: () => void;
  selected?: 'index' | 'generics';
}

export default function TypeScriptSidebar({ onIndexClick, onGenericsClick, selected }: SidebarProps) {
  return (
    <div className="bg-gray-900 text-white w-48 min-h-full py-8 px-4">
      <ul className="space-y-2">
        <li
          onClick={onIndexClick}
          className={`cursor-pointer rounded px-3 py-2 transition-colors
            ${selected === 'index'
              ? 'bg-blue-600 text-white font-bold'
              : 'hover:bg-gray-700 hover:text-blue-300'}
          `}
        >
          Index
        </li>
        <li
          onClick={onGenericsClick}
          className={`cursor-pointer rounded px-3 py-2 transition-colors
            ${selected === 'generics'
              ? 'bg-blue-600 text-white font-bold'
              : 'hover:bg-gray-700 hover:text-blue-300'}
          `}
        >
          Generics
        </li>
      </ul>
    </div>
  );
}