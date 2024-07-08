import React, { createContext, useState, useContext, useEffect } from 'react';

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    if (songList.length > 0 && !currentSong) {
      setCurrentSong(songList[0]);
    }
  }, [songList, currentSong]);

  const nextSong = () => {
    if (songList.length > 0) {
      const currentIndex = songList.indexOf(currentSong);
      const nextIndex = (currentIndex + 1) % songList.length;
      setCurrentSong(songList[nextIndex]);
    }
  };

  const prevSong = () => {
    if (songList.length > 0) {
      const currentIndex = songList.indexOf(currentSong);
      const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
      setCurrentSong(songList[prevIndex]);
    }
  };

  return (
    <SongContext.Provider value={{ currentSong, setCurrentSong, songList, setSongList, nextSong, prevSong }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongContext = () => {
  return useContext(SongContext);
};
