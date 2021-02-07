import React from "react";
import AboutMe from "./Aboutme/AboutMe";
import CoverPicture from "./CoverPicture/CoverPicture";
import style from './Profile.module.css'
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div className={style.profile}>
            <CoverPicture  />
            <AboutMe changeAvatar={props.changeAvatar}
                     profile={props.profile}
                     status={props.status}
                     updateUserStatus={props.updateUserStatus}
                     isAvatarInChangeProgress={props.isAvatarInChangeProgress}
                     isOwner={props.isOwner}
            />
            <PostsContainer />
        </div>
    )
}

export default Profile;