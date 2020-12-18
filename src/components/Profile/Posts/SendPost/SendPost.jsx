import React from "react";
import style from './SendPost.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer'


const SendPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let updateNewPostText = () => {
        let text = newPostElement.current.value;
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={style.sendPost}>
            <h2>My posts</h2>
            <input onChange={ updateNewPostText } ref={newPostElement} type="text" placeholder='Send anything' size='120' value={props.state.profilePage.newPostText}/>
            <button onClick={ addPost } href='#'>Send</button>
        </div>
    )
}

export default SendPost