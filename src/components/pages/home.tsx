import { useAuth } from '../AuthContext';
import { getTranslation } from '../../i18n/i18n';
import { useLocale } from '../LocaleContext';
import {TypeScriptPanel} from '../TSPanel/TypeScriptPanel';
import CSSPanel from '../CSSPanel/CSSPanel';

function Home() {
  const { username, isSignedIn } = useAuth();  
  const locale = useLocale().locale;
  const main_title = getTranslation('home_page', 'main_title', locale);
  const greeting = getTranslation('home_page', 'greeting', locale, [{ username: username }]);
  
  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-20">
        <h1 className="text-4xl font-bold mb-4">{main_title}</h1>
        <p className="text-lg mb-8">Please log in to continue.</p>
        <a href="/login" className="text-blue-500 hover:underline">
          Log In
        </a>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-4">{main_title}</h1>
      <p className="text-lg mb-8">{greeting}</p>
      <p className="text-gray-500">Signed in as: {username}</p>
      <>
        {get_description_pragraphs(locale)}
        <TypeScriptPanel scope="home_page" id="typescript_source_code" /> 
        <CSSPanel scope="home_page" id="css_source_code" />       
      </>
    </div>
  );
}

const get_description_pragraphs = (locale: string) => {
  const description = getTranslation('home_page', 'description', locale);
  const description_paragraphs = description.split('\n\n');

  return description_paragraphs.map((paragraph, index) => (
    <p key={index} className="text-lg mb-4">
      {paragraph}
    </p>
  ))
}

export default Home;