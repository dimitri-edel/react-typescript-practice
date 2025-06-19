import { getTranslation } from '../../../i18n/i18n';
import { useLocale } from '../../../components/LocaleContext';
import { TypeScriptPanel } from '../../../components/TSPanel/TypeScriptPanel';
import { useEffect, useRef, useState } from 'react';

// FadeInSection component for fade-in on scroll
function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}

export function Hooks() {
    const { locale } = useLocale();
    const title = getTranslation('react_hooks', 'main_title', locale, undefined, "react");
    const intro_paragraph = getTranslation('react_hooks', 'intro_paragraph', locale, undefined, "react");
    const section_heading_1 = getTranslation('react_hooks', 'section_heading_1', locale, undefined, "react");
    const hook_list = ['useState', 'useEffect', 'useContext', 'useRef', 'useCallback', 'useMemo'];

    const hooks_html = () => {
        type page_item = {
            title: string;
            description: string;
            text: string;
            id: string;
        }

        let item_list: page_item[] = [];
        hook_list.forEach((hook) => {
            const title = getTranslation(hook, `title_${hook}`, locale, undefined, "react");
            const description = getTranslation(hook, `description`, locale, undefined, "react");
            const text = getTranslation(hook, `code_example`, locale, undefined, "react");
            const id = hook;
            item_list.push({ title: title, description: description, text: text, id: id });
        });

        return (
          <>
            {item_list.map((item, index) => (
              <FadeInSection key={item.id}>
                <div className="mb-8 w-full flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
                  <p className="text-lg mb-2 text-center">{item.description}</p>
                  <TypeScriptPanel scope={item.id} id="code_example" feature="react" />
                </div>
              </FadeInSection>
            ))}
          </>
        );
    }

    return (
        <div className="flex flex-col flex-1 items-center">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-8">{intro_paragraph}</p>
            <h2 className="text-2xl font-semibold mb-4">{section_heading_1}</h2>
            {hooks_html()}
        </div>
    );
}