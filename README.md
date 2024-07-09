# Music Player

A feature-rich music player built using React, Vite, TailwindCSS, and several other modern web technologies. This project showcases an intuitive and interactive user interface for playing music.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Custom Hooks](#custom-hooks)
- [Contexts](#contexts)
- [Dependencies](#dependencies)


## Features

- Play, pause, and skip tracks
- Dynamic background color change
- Display current song information
- Volume control
- Responsive and user-friendly interface

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/music-player.git
cd music-player
npm install
```

## Usage

To run the project locally, use the following command:

```bash
npm run dev
```

To build the project for production, use:

```bash
npm run build
```

To preview the production build locally, use:

```bash
npm run preview
```

## File Structure

The project structure is organized as follows:

```
music-player/
├── public/
├── src/
│   ├── Api/
│   ├── assets/
│   ├── components/
│   │   ├── Controls/
│   │   │   ├── Controls.jsx
│   │   │   ├── Controls.module.scss
│   │   ├── Logo/
│   │   │   ├── Logo.jsx
│   │   ├── Player/
│   │   │   ├── Player.jsx
│   │   │   ├── Player.module.scss
│   │   ├── ProfileDrawer/
│   │   │   ├── ProfileDrawer.jsx
│   │   │   ├── ProfileDrawer.module.scss
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBar.module.scss
│   │   ├── SongList/
│   │   │   ├── SongList.jsx
│   │   │   ├── SongList.module.scss
│   │   │   ├── SongListItems.jsx
│   │   ├── SongListSection/
│   │   │   ├── SongListSection.jsx
│   │   ├── UserProfile/
│   │       ├── UserProfile.jsx
│   │       ├── UserProfile.module.scss
│   ├── context/
│   │   ├── BackgroundContext.jsx
│   │   ├── SongContext.jsx
│   ├── hooks/
│   │   ├── useAudioDuration.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   ├── index.css
│   ├── Layout.jsx
│   ├── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Custom Hooks

### useAudioDuration

A custom hook to get the duration of an audio file from a given URL.

```javascript
import { useState, useEffect } from 'react';

const useAudioDuration = (url) => {
    const [duration, setDuration] = useState(null);

    useEffect(() => {
        const audio = new Audio(url);

        const onLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener('loadedmetadata', onLoadedMetadata);

        return () => {
            audio.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
    }, [url]);

    return duration;
};

export default useAudioDuration;
```

## Contexts

### BackgroundContext

Manages the background color state of the application.

```javascript
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
```

### SongContext

Manages the state of the current song, song list, and playback controls.

```javascript
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
```

## Dependencies

This project relies on the following dependencies:


- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-icons`: ^5.2.1
- `react-router-dom`: ^6.24.1

### Development Dependencies

- `@types/react`: ^18.3.3
- `@types/react-dom`: ^18.3.0
- `@vitejs/plugin-react`: ^4.3.1
- `autoprefixer`: ^10.4.19
- `eslint`: ^8.57.0
- `eslint-plugin-react`: ^7.34.2
- `eslint-plugin-react-hooks`: ^4.6.2
- `eslint-plugin-react-refresh`: ^0.4.7
- `postcss`: ^8.4.39
- `sass`: ^1.77.6
- `tailwindcss`: ^3.4.4
- `vite`: ^5.3.1

