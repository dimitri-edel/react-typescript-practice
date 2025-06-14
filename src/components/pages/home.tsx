import { useAuth } from '../AuthContext';
import { getTranslation } from '../../i18n/i18n';
import { useLocale } from '../LocaleContext';
import TypeScriptPanel from '../TSPanel/TypeScriptPanel';
import ConfirmModal from '../modals/ConfirmModal';
import { useState } from 'react';

function Home() {
  const { username, isSignedIn } = useAuth();
  const locale = useLocale().locale;
  const main_title = getTranslation('home_page', 'main_title', locale);
  const greeting = getTranslation('home_page', 'greeting', locale, [{ username: username }]);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState<string | null>(null);

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
        <div className="flex items-center gap-4 mt-8">
          <button className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700" onClick={() => setShowModal(true)}>
            Show Confirm Modal
          </button>
          <span className="text-lg">{result === 'confirmed' ? 'Confirmed' : result === 'discarded' ? 'Discarded' : ''}</span>
        </div>
        {showModal && (
          <ConfirmModal
            scope="logout_page"
            id="confirmation_message"
            onConfirm={() => {
              setResult('confirmed');
              setShowModal(false);
            }}
            onCancel={() => {
              setResult('discarded');
              setShowModal(false);
            }}
          />
        )}
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