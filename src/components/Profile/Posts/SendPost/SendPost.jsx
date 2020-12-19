import React from "react";
import style from './SendPost.module.css';


const SendPost = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onUpdateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.sendPost}>
            <h2>My posts</h2>
            <input onChange={ onUpdateNewPostText } ref={newPostElement} type="text" placeholder='Send anything' size='120' value={props.newPostText}/>
            <button onClick={ onAddPost } href='#'>Send</button>
        </div>
    )
}

export default SendPost