import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Logo from '../Logo/Logo';
import SongList from "../SongList/SongList";

const SongListSection = () => {
  let [trackToggle, setTrackToggle] = useState(true);

  const handleTrackToggle = () => {
    setTrackToggle(!trackToggle);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="xl:hidden p-4 h-20 sticky top-0 z-10 ">
        <Logo />
      </div>
      <div className="p-4 h-20 sticky top-0 z-10 flex gap-10 font-bold ">
        <button className={`text-2xl mt-2 ${trackToggle ? "text-white" : "text-gray-500"}`} onClick={handleTrackToggle}>For You</button>
        <button className={`text-2xl mt-2 ${!trackToggle ? "text-white" : "text-gray-500"}`} onClick={handleTrackToggle}>Top Tracks</button>
      </div>
      <div className="p-4 sticky top-20 h-20 z-10 ">
        <div className="search-bar flex items-center rounded-lg h-full overflow-hidden justify-between px-4">
          <input type="text" placeholder="Search songs, Artists" className="w-[70%] h-[100%] bg-transparent text-gray-200 text-xl px-15 outline-none" />
          <button className="w-[10%] text-white h-7"><CiSearch /></button>
        </div>
      </div>
      <div className="h-[80vh]">
        {trackToggle ? <SongList isTopTrack={false} /> : <SongList isTopTrack={true} />}
      </div>
    </div>
  );
};

export default SongListSection;