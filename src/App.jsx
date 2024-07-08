import React from 'react';
import { SongProvider } from './context/SongContext';
import { BackgroundProvider } from './context/BackgroundContext'; 
import Layout from './Layout';

const App = () => {
  return (
    <SongProvider>
      <BackgroundProvider>
        <Layout />
      </BackgroundProvider>
    </SongProvider>
  );
};

export default App;
