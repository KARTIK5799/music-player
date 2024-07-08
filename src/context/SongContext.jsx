import React, { createContext, useState, useContext, useEffect } from 'react';

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [songList, setSongList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (songList.length > 0 && !currentSong) {
      setCurrentSong(songList[0]);
    }
  }, [songList]);

  useEffect(() => {
    if (currentSong) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [currentSong]);

  const nextSong = () => {
    if (songList.length > 0 && currentSong) {
      const currentIndex = songList.indexOf(currentSong);
      const nextIndex = (currentIndex + 1) % songList.length;
      setCurrentSong(songList[nextIndex]);
    }
  };

  const prevSong = () => {
    if (songList.length > 0 && currentSong) {
      const currentIndex = songList.indexOf(currentSong);
      const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
      setCurrentSong(songList[prevIndex]);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  return (
    <SongContext.Provider value={{ currentSong, setCurrentSong, songList, setSongList, isPlaying, setIsPlaying, nextSong, prevSong, togglePlayPause }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongContext = () => useContext(SongContext);
