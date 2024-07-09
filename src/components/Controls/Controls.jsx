import React, { useState, useEffect, useRef } from 'react';
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPlay, FaPause } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { IoIosMore, IoMdClose, IoMdShareAlt } from "react-icons/io";
import useAudioDuration from '../../hooks/useAudioDuration';
import { useSongContext } from '../../context/SongContext';
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const Controls = ({ onPlayPause, songUrl }) => {
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [volumeVisible, setVolumeVisible] = useState(false);
  const [moreOptionVisible, setMoreOptionVisible] = useState(false);
  const [volume, setVolume] = useState(1);

  const audioRef = useRef(null);
  const duration = useAudioDuration(songUrl);
  const { nextSong, prevSong, isPlaying, setIsPlaying, currentSong } = useSongContext();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songUrl;
      audioRef.current.volume = volume;
      setLoading(true);
    }
  }, [songUrl, volume]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleCanPlay = () => setLoading(false);
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setRangeValue(audio.currentTime);
    };
    const handleEnded = () => onPlayPause(false);

    if (audio) {
      audio.addEventListener('canplaythrough', handleCanPlay);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    return () => {
      if (audio) {
        audio.removeEventListener('canplaythrough', handleCanPlay);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
      }
    };
  }, [isPlaying, songUrl, currentSong]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleRangeChange = (e) => {
    const newTime = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
      setRangeValue(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatDuration = (time) => {
    if (time === null) return '00:00';

    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return [
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  };

  const handleVolume = () => {
    setVolumeVisible(!volumeVisible);
  };

  const handleMore = () => {
    setMoreOptionVisible(!moreOptionVisible);
  };

  return (
    <div className="text-white flex flex-col items-center">
      <audio ref={audioRef} />
      <div className="w-full mb-2">
        <div className="flex w-full justify-between">
          <p>{formatDuration(currentTime)}</p>
          <p>{formatDuration(duration)}</p>
        </div>
        
        <input
          type="range"
          className="w-full"
          min="0"
          max={duration || 0}
          value={rangeValue}
          onChange={handleRangeChange}
          disabled={loading}
        />
      </div>
      <div className="flex items-center w-full justify-between space-x-2">
        <div className="p-3 bg-gray-700 relative rounded-full cursor-pointer hover:bg-gray-600" onClick={handleMore}>
          {!moreOptionVisible ? <IoIosMore /> : <IoMdClose />}
          {moreOptionVisible && (
            <div className='absolute bg-gray-700 top-[-6.5rem] flex-col w-[10rem] border left-[-2rem] md:left-[-3.5rem] px-3 py-3 rounded-lg flex'>
              <h2 className='flex gap-2 items-center'> <MdOutlinePlaylistAdd /> Add to Playlist</h2>
              <h2 className='flex gap-2 items-center'><CiHeart /> Like Music</h2>
              <h2 className='flex gap-2 items-center'><IoMdShareAlt /> Share</h2>
            </div>
          )}
        </div>
        <div className='flex gap-5'>
          <div className="p-3 cursor-pointer hover:bg-gray-600 rounded-full" onClick={prevSong}>
            <IoPlaySkipBack className="text-xl" />
          </div>
          {loading ? (
            <div className="p-3 bg-gray-700 rounded-full cursor-pointer">
              <div className="w-6 h-6 border-4 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          ) : isPlaying ? (
            <div className="p-3 bg-white rounded-full cursor-pointer hover:bg-gray-200 text-black" onClick={() => onPlayPause(false)}>
              <FaPause className="text-xl" />
            </div>
          ) : (
            <div className="p-3 bg-white rounded-full cursor-pointer hover:bg-gray-200 text-black" onClick={() => onPlayPause(true)}>
              <FaPlay className="text-xl" />
            </div>
          )}
          <div className="p-3 cursor-pointer hover:bg-gray-600 rounded-full" onClick={nextSong}>
            <IoPlaySkipForward className="text-xl" />
          </div>
        </div>
        <div className="p-3 bg-gray-700 rounded-full cursor-pointer relative hover:bg-gray-600" onClick={handleVolume}>
          {volumeVisible && (
            <div className='absolute bg-gray-700 top-[-5rem] left-[-2rem] px-3 py-3 rounded-lg transform rotate-[90deg] flex'>
              <input 
                type="range" 
                className='transform rotate-[180deg] w-20' 
                min="0" 
                max="1" 
                step="0.01" 
                value={volume} 
                onChange={handleVolumeChange} 
              />
            </div>
          )}
          {!volumeVisible ? <AiFillSound className="text-xl" /> : <IoMdClose />}
        </div>
      </div>
    </div>
  );
}

export default Controls;
