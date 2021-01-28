import {userAuth} from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
            ...state,
            initialized: true
        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZE_SUCCESS});

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(userAuth())
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSuccess())
        })

    }
}


export default appReducer;