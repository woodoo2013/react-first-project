import React from "react";
import AboutMe from "./Aboutme/AboutMe";
import Posts from "./Posts/Posts";
import CoverPicture from "./CoverPicture/CoverPicture";
import style from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={style.profile}>
            <CoverPicture />
            <AboutMe />
            <Posts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;