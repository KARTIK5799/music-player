import React, {useState} from 'react';
import styles from './userprofile.module.scss';
import Profile from '../../assets/Profile.png';
import ProfileDrawer from '../ProfileDrawer/ProfileDrawer';
import { IoCloseCircleOutline } from "react-icons/io5";


const UserProfile = ({isMobile}) => {
    const [isProfileOpen,setIsProfileOpen]=useState(false);

    const toggleDrawer=()=>{
        setIsProfileOpen(!isProfileOpen);
    }
  return (
    <>
    {isProfileOpen && <ProfileDrawer onClose={toggleDrawer} isMobile={isMobile}/>}
    <div className={`${styles.shine} ${styles.pointer} `} onClick={toggleDrawer}>
      {isProfileOpen?<IoCloseCircleOutline size={50} color='#fff'/>:<img src={Profile} alt="" className="h-full w-full px-2 object-cover" />}

    </div>
    </>
  );
}

export default UserProfile;
