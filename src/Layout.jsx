import React, { useState } from 'react';
import Logo from "./components/Logo/Logo";
import Player from "./components/Player/Player";
import SongListSection from "./components/SongListSection/SongListSection";
import UserProfile from "./components/UserProfile/UserProfile";
import { useBackgroundContext } from './context/BackgroundContext'; 

const Layout = () => {
  const { backgroundColor } = useBackgroundContext(); 
  const [isLastSectionVisible, setIsLastSectionVisible] = useState(false);

  const toggleLastSection = () => {
    setIsLastSectionVisible(!isLastSectionVisible);
  };

  return (
    <div className="flex flex-col h-screen sm:flex-row relative text-white " style={{ backgroundColor }}> 
      <div className="first-section h-screen hidden xl:block w-[20%] p-5">
        <div className="flex flex-col h-full justify-between">
          <Logo />
          <UserProfile />
        </div>
      </div>
      
      <div className="second-section hidden sm:w-[50vw] sm:block lg:w-[30%] p-5 h-full">
        <SongListSection islogoVisible={true} />
      </div>
    
      <div className="third-section  flex  flex-col  md:w-[50vw] lg:w-[50%] mx-2 pb-5 sm:p-5">
        <div className="sm:hidden  p-4 h-20 sticky top-0 z-10">
        <div className="flex  h-full justify-between">
          <Logo />
          <UserProfile isMobile={true} />
        </div>
        </div>
        <div className=" w-full flex items-center justify-center">
          <Player />
        </div>
      </div>
      <div 
        style={{ backgroundColor }} 
        className={`last-section sm:hidden shadow-lg w-screen h-auto border-t rounded-xl fixed md:w-[40vw] z-50 lg:w-[30%] pt-2 px-5 bottom-0 transition-transform duration-300 ${isLastSectionVisible ? 'transform translate-y-10' : 'transform translate-y-[98vh]'}`}
      >
        <div className='w-full flex flex-col items-center justify-center' onClick={toggleLastSection}>
          <div className='w-[5rem] bg-gray-700 h-1 rounded-full cursor-pointer' ></div>
          <h3  className='cursor-pointer'>More Songs</h3>
        </div>
        <SongListSection />
      </div>
    </div>
  );
};

export default Layout;
