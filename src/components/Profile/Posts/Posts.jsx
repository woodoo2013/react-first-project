import React from "react";
import style from './Posts.module.css'


const Posts = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onUpdateNewPostText = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={style.myPosts}>
            <h2>My posts</h2>
            <input onChange={ onUpdateNewPostText } ref={newPostElement} type="text" placeholder='Send anything' size='120' value={props.profilePage.newPostText}/>
            <button onClick={ onAddPost } href='#'>Send</button>
            {props.posts}
        </div>
    )
}

export default Posts;