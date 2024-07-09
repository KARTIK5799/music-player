import React, { useState, useEffect } from 'react';
import cover from '../../assets/cover.jpg';
import Controls from '../Controls/Controls';
import { useSongContext } from '../../context/SongContext';
import { useBackgroundContext } from '../../context/BackgroundContext'; 

const getAverageColor = (image, tintPercentage = 0.7) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let r = 0, g = 0, b = 0;
    const length = data.length / 4;
    for (let i = 0; i < length; i++) {
      r += data[i * 4];
      g += data[i * 4 + 1];
      b += data[i * 4 + 2];
    }
    r = Math.floor(r / length);
    g = Math.floor(g / length);
    b = Math.floor(b / length);

    r = Math.floor(r * (1 - tintPercentage));
    g = Math.floor(g * (1 - tintPercentage));
    b = Math.floor(b * (1 - tintPercentage));

    resolve(`rgb(${r},${g},${b})`);
  });
};

const Player = () => {
  const { currentSong ,isPlaying, setIsPlaying } = useSongContext();
  const { setBackgroundColor } = useBackgroundContext();

  useEffect(() => {
    if (currentSong && currentSong.cover) {
      const image = new Image();
      image.crossOrigin = 'Anonymous';
      image.src = `https://cms.samespace.com/assets/${currentSong.cover}`;
      image.onload = async () => {
        const color = await getAverageColor(image);
        setBackgroundColor(color); 
      };
    }
  }, [currentSong, setBackgroundColor]);

  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState);
  };

  if (!currentSong) return <div>No song is currently playing</div>;

  const coverUrl = currentSong.cover ? `https://cms.samespace.com/assets/${currentSong.cover}` : cover;

  return (
    <div className='w-[95%] h-[90%]  sm:w-[95%] md:h-[80%] lg:w-[60%] flex justify-center flex-col p-5'>
      <div className='text-white mb-4'>
        <h2 className='text-3xl font-bold'>{currentSong.name}</h2>
        <p className='text-gray-400 text-xl'>{currentSong.artist}</p>
      </div>
      <div className='w-full bg-slate-500 h-[27rem] rounded-md overflow-hidden'>
        <img src={coverUrl} alt={currentSong.name} className='object-cover h-full w-full'/>
      </div>
      <div className='mt-4'>
        <Controls  onPlayPause={handlePlayPause} songUrl={currentSong.url}/>
      </div>
    </div>
  );
};

export default Player;
