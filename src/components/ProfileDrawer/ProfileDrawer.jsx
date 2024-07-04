import React from "react";
import styles from "./profiledrawer.module.scss";
import Profile from "../../assets/Profile.png";

const ProfileDrawer = () => {
  return (
    <div
      className={` h-auto text-white flex flex-col-reverse gap-3 justify-center  rounded transparant`}
    >
      <div className="border flex items-center justify-center h-16 p-4 mt-6">
        <img
          src={Profile}
          alt="Profile"
          className="h-12 w-12 object-cover bg-black rounded-full mr-4"
        />
        <h2 className="text-xl font-semibold">Kartik Sapkal</h2>
      </div>

      <div>
        <ul className="flex flex-col items-center justify-center w-[100%] m-8">
          <li className="text-lg cursor-pointer hover:text-gray-300">Home</li>
          <li className="text-lg cursor-pointer hover:text-gray-300">Music</li>
          <li className="text-lg cursor-pointer hover:text-gray-300">
            Playlists
          </li>
          <li className="text-lg cursor-pointer hover:text-gray-300">
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDrawer;
