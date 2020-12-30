import React from "react";
import Post from "./Post/Post";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Posts from "./Posts";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        posts: state.profilePage.posts.map( (post) => {
            return <Post key={post.id} id={post.id} message={post.message} likes={post.likes} />
        }),
    }
}

const PostsContainer = connect(mapStateToProps, {addPost, updateNewPostText})(Posts)

export default PostsContainer;