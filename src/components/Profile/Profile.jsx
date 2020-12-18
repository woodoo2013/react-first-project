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
            <Posts state={props.store.getState()} store={props.store} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;