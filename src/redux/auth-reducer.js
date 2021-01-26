import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_USER = 'LOGIN_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
            ...state,
            ...action.data,
            isAuth: true
        }
        case LOGIN_USER:
            return {
                ...state,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const LoginUser = () => ({type: LOGIN_USER})

export const userAuth = () => {
    return (dispatch) => {
        authAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}

export const userLogin = (formData) => {
    return (dispatch) => {
        authAPI.login(formData)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(LoginUser)

                }
            })
    }
}

export default authReducer;