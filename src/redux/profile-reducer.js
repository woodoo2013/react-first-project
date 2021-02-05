import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hellow', likes: 1},
        {id: 2, message: 'Hello', likes: 13},
        {id: 3, message: 'How are you', likes: 121},
        {id: 4, message: 'Oleg', likes: 22},
        {id: 5, message: 'VVVV', likes: 33},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.message,
                likes: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPost = (message) => ({type: ADD_POST, message});


export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}


//thunk
export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateProfileStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export default profileReducer;