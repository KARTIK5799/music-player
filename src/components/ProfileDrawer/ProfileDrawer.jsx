import React from "react";
import styles from "./profiledrawer.module.scss";
import Profile from "../../assets/Profile.png";
import { FaHome, FaMusic, FaAngleRight } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const ProfileDrawer = () => {
  return (
    <div className="h-auto text-white flex flex-col-reverse gap-3 justify-center rounded bg-transparent">
      <div className="border flex items-center justify-center h-16 p-4 mt-6 ml-2">
        <img
          src={Profile}
          alt="Profile"
          className="h-12 w-12 object-cover bg-black rounded-full mr-4"
        />
        <h2 className="text-xl font-semibold">Kartik Sapkal</h2>
      </div>

      <div className="">
        <ul className=" w-full flex flex-col items-center  gap-10">
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
  );
};

export default ProfileDrawer;
