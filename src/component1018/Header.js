import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext.js';

function Header() {
  const {language, toggleLanguage} = useContext(LanguageContext);
  return (
    <header className="header">
      <h1>{language === 'en' ? 'Language Props Example' : '언어 프롭스 예시'}</h1>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Korean' : '영어로 전환'}
      </button>
    </header>
  );
}

export default Header;
