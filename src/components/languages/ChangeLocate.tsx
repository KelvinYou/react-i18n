import React from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from './en/common_en.json';
import common_ch from './ch/common_ch.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Specify the supported languages and their resources
    resources: {
      en: { translation: common_en, },
      ch: { translation: common_ch, },
    },
    // Define the fallback language and how it should be detected
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
    },
  });

const ChangeLocate = () => {
  const { i18n } = useTranslation();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <select
        value={i18n.language}
        onChange={handleChange}
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          color: '#555',
          padding: '8px',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: 'none',
          cursor: 'pointer',
          outline: 'none',
          width: '200px'
        }}
      >
        <option value="en">English</option>
        <option value="ch">中文</option>
      </select>
    </div>
  )
}

export default ChangeLocate