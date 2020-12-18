import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer'
import SendPost from "./SendPost";


const SendPostContainer = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <SendPost state={props.state.profilePage} AddPost={addPost} UpdateNewPostText={updateNewPostText}/>
    )
}

export default SendPostContainer