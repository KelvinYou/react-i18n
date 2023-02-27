import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import ChangeLocate from './components/languages/ChangeLocate';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <ChangeLocate />
      <div>
        <h1>{t('Hello')}</h1>
        <h1>{t('Have a nice day ~')}</h1>
      </div>
    </div>
  );
}

export default App;
