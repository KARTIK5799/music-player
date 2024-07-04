import Logo from "./components/Logo/Logo";
import Player from "./components/Player/Player";
import SongListSection from "./components/SongListSection/SongListSection";
import UserProfile from "./components/UserProfile/UserProfile";



const Layout = () => {
  return (
    <div className="flex text-white ">
      <div className="first-section h-screen hidden xl:block w-[20%] p-5 ">
        <div className="flex flex-col h-full justify-between">
          <Logo />
          <UserProfile/>
        </div>
      </div>
      <div className="second-section hidden sm:block w-[30%] p-5  h-full">

        <SongListSection/>
      </div>
      <div className="third-section  sm:w-[50%] p-5">
      <div className="sm:hidden p-4 h-20 sticky top-0 z-10">
        <Logo />
        </div>
     <div className="h-full w-full flex items-center justify-center">
     <Player/>
     </div>
      </div>
    </div>
  );
};

export default Layout;
