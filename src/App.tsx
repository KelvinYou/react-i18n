import React from 'react';
import logo from './logo.svg';
import './App.css';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Specify the supported languages and their resources
    resources: {
      en: {
        translation: {
          greeting: 'Hello',
        },
      },
      ch: {
        translation: {
          greeting: '你好',
        },
      },
    },
    // Define the fallback language and how it should be detected
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
    },
  });

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };
  
function App() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="App">
      <div>
        hi
        <h1>{t('greeting')}</h1>
        <select value={i18n.language} onChange={handleChange}>
          <option value="en">English</option>
          <option value="ch">中文</option>
        </select>
      </div>
    </div>
  );
}

export default App;
