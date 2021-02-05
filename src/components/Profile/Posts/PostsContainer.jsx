import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import Posts from "./Posts";



let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
})

const PostsContainer = connect(mapStateToProps, {addPost})(Posts)

export default PostsContainer;