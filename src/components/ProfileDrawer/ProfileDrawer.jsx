import React from "react";
import Profile from "../../assets/Profile.png";
import { FaHome, FaMusic, FaAngleRight } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";


const ProfileDrawer = ({ isMobile }) => {
  return (
    isMobile ? (
      <div className="absolute right-3 bg-black rounded-3xl pt-20 py-10 px-10 top-3 ">
        <div className="h-auto sm:relative text-white flex flex-col-reverse gap-3 justify-center rounded bg-transparent">
        <h2 className="text-xl mt-10 font-semibold">Kartik Sapkal</h2>

        <div>
          <ul className="w-full flex flex-col items-start gap-10">
            <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300 h-5">
              <FaHome size={16} /> Home <FaAngleRight />
            </li>
            <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300 h-5">
              <FaMusic size={16} /> Music <FaAngleRight />
            </li>
            <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300 h-5">
              <MdOutlinePlaylistAdd size={16} /> Playlists <FaAngleRight />
            </li>
            <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300 h-5">
              <IoIosSettings size={16} /> Settings <FaAngleRight />
            </li>
          </ul>
        </div>
      </div>
      </div>
    ) : (
      <div className="h-auto sm:relative text-white flex flex-col-reverse gap-3 justify-center rounded bg-transparent">
        <div className="border flex items-center justify-center h-16 p-4 mt-6 ml-2">
          <img
            src={Profile}
            alt="Profile"
            className="h-12 w-12 object-cover bg-black rounded-full mr-4"
          />
          <h2 className="text-xl font-semibold">Kartik Sapkal</h2>
        </div>

        <div>
          <ul className="w-full flex flex-col items-center gap-10">
            <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300 h-5">
              <FaHome size={16} /> Home <FaAngleRight />
            </li>
            <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300 h-5">
              <FaMusic size={16} /> Music <FaAngleRight />
            </li>
            <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300 h-5">
              <MdOutlinePlaylistAdd size={16} /> Playlists <FaAngleRight />
            </li>
            <li className="flex items-center gap-2 text-lg cursor-pointer hover:text-gray-300 h-5">
              <IoIosSettings size={16} /> Settings <FaAngleRight />
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default ProfileDrawer;
