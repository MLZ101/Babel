import React, { useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import Arabic from '../languages/ar.json';
import English from '../languages/en.json';

export const Context = React.createContext();

const Wrapper = (props) => {
  const [locale, setLocale] = useState(navigator.language);
  const messages = locale === 'en' ? English : Arabic;
  function selectLanguage(newLocale) {
    setLocale(newLocale);
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--text-direction', locale === 'ar' ? 'rtl' : 'ltr');
  }, [locale]);


  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
