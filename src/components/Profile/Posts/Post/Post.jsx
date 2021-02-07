import React from "react";
import style from './Post.module.css'
import Avatar from "../../../common/Avatar/Avatar";



const Post = (props) => {

    return (
        <div className={style.Post}>
            <Avatar avatar={props.profile.photos.large} />
            <p>{props.message}</p>
            <div>Current likes: {props.likes}</div>
        </div>
    )
}

export default Post;