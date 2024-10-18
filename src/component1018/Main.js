import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext.js';

function Main() {
  const {language} = useContext(LanguageContext);
  return (
    <main className="main">
      {language === 'en' ? (
        <p>This is an example of using React Props to switch languages.</p>
      ) : (
        <p>React Props를 사용하여 언어를 전환하는 예시입니다.</p>
      )}
    </main>
  );
}

export default Main;
