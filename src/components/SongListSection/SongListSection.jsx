import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../Logo/Logo";
import SongList from "../SongList/SongList";

const SongListSection = ({islogoVisible}) => {
  let [trackToggle, setTrackToggle] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const handleTrackToggle = () => {
    setTrackToggle(!trackToggle);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="h-full  flex flex-col ">
      {islogoVisible && <div className="xl:hidden p-4 h-20 sticky top-0 z-10 ">
        <Logo />
      </div>}
      <div className="p-4 h-[10%] sticky top-0 z-10 flex gap-10 font-bold ">
        <button
          className={`text-2xl mt-2 ${
            trackToggle ? "text-white" : "text-gray-500"
          }`}
          onClick={handleTrackToggle}
        >
          For You
        </button>
        <button
          className={`text-2xl mt-2 ${
            !trackToggle ? "text-white" : "text-gray-500"
          }`}
          onClick={handleTrackToggle}
        >
          Top Tracks
        </button>
      </div>
      <div className="p-4 sticky top-20 h-[10%] z-10 ">
        <div className="search-bar flex items-center rounded-lg  h-full overflow-hidden justify-between px-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search songs, Artists"
            className="w-[70%]  min-h-[3rem] bg-transparent text-gray-200 text-xl px-15 outline-none"
          />
          <button className=" text-white h-7">
            <CiSearch />
          </button>
        </div>
      </div>
      <div className="h-[70%] ">
        {trackToggle ? (
          <SongList isTopTrack={false} searchQuery={searchQuery} />
        ) : (
          <SongList isTopTrack={true} searchQuery={searchQuery}/>
        )}
      </div>
    </div>
  );
};

export default SongListSection;
