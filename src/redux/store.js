import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hellow', likes: 1},
                {id: 2, message: 'Hello', likes: 13},
                {id: 3, message: 'How are you', likes: 121},
                {id: 4, message: 'Oleg', likes: 22},
                {id: 5, message: 'VVVV', likes: 33},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vasya', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/1-uniform_2_dual.svg/320px-1-uniform_2_dual.svg.png'},
                {id: 2, name: 'Andrey', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Square_Lattice_Tiling.svg/220px-Square_Lattice_Tiling.svg.png'},
                {id: 3, name: 'ALexey', avatar: 'https://noverplitka.ru/images/1/s423.jpg'},
                {id: 4, name: 'Oleg', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7rtjhrDaRCo1l_Qn26n7xroTBhw2SgCDsw&usqp=CAU'},
                {id: 5, name: 'Petya', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/LGBT_flag_square.svg/1200px-LGBT_flag_square.svg.png'},
            ],
            messages: [
                {id: 1, message: 'Hellow'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Howdy'},
                {id: 4, message: 'Hi'},
                {id: 5, message: 'How are you?'},
            ],
            currentMessage: '',
        },
    },

    _callSubscriber () {
        console.log('1')
    },

    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
    }
}

export default store