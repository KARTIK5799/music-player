import React from 'react';
import useAudioDuration from '../../hooks/useAudioDuration';
const formatDuration = (duration) => {
  if (duration === null) return '00:00';

  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  return [
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
  ].join(':');
};

const SongListItem = ({ songTitle,songUrl, songCover, onClick}) => {
  const duration=useAudioDuration(songUrl)
  return (
    <div className='flex p-4 h-20 cursor-pointer'onClick={onClick} >
      <div className='flex items-center w-[90%]'>
        <img src={`https://cms.samespace.com/assets/${songCover} `|| 'default'} alt="Song" className='h-[3rem] w-[3rem] rounded-full mr-4' />
        <h2 className='text-lg font-medium'>{songTitle}</h2>
      </div>
      <p className='text-sm w-[10%]'>{formatDuration(duration)}</p>
      
    </div>
  );
};

export default SongListItem;
