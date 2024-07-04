import Logo from "./components/Logo/Logo";
import UserProfile from "./components/UserProfile/UserProfile";

const Layout = () => {
  return (
    <div className="flex ">
      <div className="first-section  hidden xl:block w-[20%] p-5 ">
        <div className="flex flex-col justify-between">
          <Logo />
          <UserProfile/>
        </div>
      </div>
      <div className="second-section  hidden sm:block w-[30%] p-5 overflow-hidden">
        <div className="bg-gray-300 xl:hidden p-4 h-20 sticky top-0 z-10">
          Swiggy logo
        </div>
        <div className="bg-gray-300 p-4 h-20 sticky top-0 z-10">
          Header (Sticky)
        </div>
        <div className="bg-gray-400 p-4 sticky top-14 h-20 z-10">
          Search Bar (Sticky)
        </div>
        <div className="overflow-y-auto flex-1 p-4 bg-white overflow-scroll">
          lorem1100
        </div>
      </div>
      <div className="third-section  sm:w-[50%] p-5"></div>
    </div>
  );
};

export default Layout;
