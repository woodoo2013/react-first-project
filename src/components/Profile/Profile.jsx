import React from "react";
import AboutMe from "./Aboutme/AboutMe";
import CoverPicture from "./CoverPicture/CoverPicture";
import style from './Profile.module.css'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <CoverPicture  />
            <AboutMe profile={props.profile} />
            <PostsContainer />
        </div>
    )
}

export default Profile;