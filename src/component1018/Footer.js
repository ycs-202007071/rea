import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext.js';

function Footer() {
  const {language} = useContext(LanguageContext);
  return (
    <footer className="footer">
      {language === 'en' ? <p>All rights reserved.</p> : <p>모든 권리 보유.</p>}
    </footer>
  );
}

export default Footer;
