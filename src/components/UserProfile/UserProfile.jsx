import React, {useState} from 'react';
import styles from './userprofile.module.scss';
import Profile from '../../assets/Profile.png';
import ProfileDrawer from '../ProfileDrawer/ProfileDrawer';
import { IoCloseCircleOutline } from "react-icons/io5";


const UserProfile = () => {
    const [isProfileOpen,setIsProfileOpen]=useState(false);

    const toggleDrawer=()=>{
        setIsProfileOpen(!isProfileOpen);
    }
  return (
    <>
    {isProfileOpen && <ProfileDrawer onClose={toggleDrawer}/>}
    <div className={`${styles.shine} ${styles.pointer}`} onClick={toggleDrawer}>
      {isProfileOpen?<IoCloseCircleOutline color='#fff'/>:<img src={Profile} alt="" className="h-full w-full object-cover" />}

    </div>
    </>
  );
}

export default UserProfile;
