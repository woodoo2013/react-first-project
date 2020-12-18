const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
        posts: [
            {id: 1, message: 'Hellow', likes: 1},
            {id: 2, message: 'Hello', likes: 13},
            {id: 3, message: 'How are you', likes: 121},
            {id: 4, message: 'Oleg', likes: 22},
            {id: 5, message: 'VVVV', likes: 33},
        ],
        newPostText: '',
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, text: text}
}


export default profileReducer;