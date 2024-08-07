import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [isEng, setIsEng] = useState(true);

  const toggleLanguage = () => {
    setIsEng((prev) => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isEng, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
