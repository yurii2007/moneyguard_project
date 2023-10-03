import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const TranslationPanel = () => {
  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button
        onClick={() => changeLanguage('en')}
        disabled={i18next.language === 'en'}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ua')}
        disabled={i18next.language === 'ua'}
      >
        UA
      </button>
    </div>
  );
};

export default TranslationPanel;
