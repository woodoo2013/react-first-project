import React from "react";
import AboutMe from "./AboutMe";
import MyPosts from "./MyPosts";
import CoverPicture from "./CoverPicture";

const Profile = () => {
    return (
        <div className='profile'>
            <CoverPicture />
            <AboutMe />
            <MyPosts />
        </div>
    )
}

export default Profile;