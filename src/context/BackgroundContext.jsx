
import React, { createContext, useState, useContext } from 'react';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#000'); 

  return (
    <BackgroundContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundContext = () => {
  return useContext(BackgroundContext);
};
