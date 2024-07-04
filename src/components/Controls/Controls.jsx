import React from 'react';
import { IoPlayBack, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPlay, FaPause } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";


const Controls = ({isPlaying}) => {
  return (
    <div className="text-white  flex flex-col items-center">
      <div className="w-full mb-2">
        <input type="range" className="w-full" />
      </div>
      <div className="flex items-center w-full justify-between space-x-2">
        <div className="p-3 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600">
        <IoIosMore />
        </div>
       <div className='flex gap-5'>
       <div className="p-3  cursor-pointer hover:bg-gray-600">
          <IoPlaySkipBack className="text-xl" />
        </div>
        {isPlaying?<div className="p-3 bg-white rounded-full cursor-pointer hover:bg-gray-200 text-black">
          <FaPlay className="text-xl" />
        </div>:
        <div className="p-3 bg-white rounded-full cursor-pointer hover:bg-gray-200 text-black">
          <FaPause className="text-xl" />
        </div>}
        <div className="p-3  cursor-pointer hover:bg-gray-600">
          <IoPlaySkipForward className="text-xl" />
        </div>
       </div>
        <div className="p-3 bg-gray-700 rounded-full cursor-pointer hover:bg-gray-600">
          <AiFillSound className="text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Controls;
