import React from "react";
import AboutMe from "./AboutMe";
import MyPosts from "./MyPosts";
import CoverPicture from "./CoverPicture";
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.profile}>
            <CoverPicture />
            <AboutMe />
            <MyPosts />
        </div>
    )
}

export default Profile;