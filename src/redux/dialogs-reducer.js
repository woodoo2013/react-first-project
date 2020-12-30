const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'


let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Vasya',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/1-uniform_2_dual.svg/320px-1-uniform_2_dual.svg.png'
        },
        {
            id: 2,
            name: 'Andrey',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Square_Lattice_Tiling.svg/220px-Square_Lattice_Tiling.svg.png'
        },
        {   id: 3,
            name: 'ALexey',
            avatar: 'https://noverplitka.ru/images/1/s423.jpg'},
        {
            id: 4,
            name: 'Oleg',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7rtjhrDaRCo1l_Qn26n7xroTBhw2SgCDsw&usqp=CAU'
        },
        {
            id: 5,
            name: 'Petya',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/LGBT_flag_square.svg/1200px-LGBT_flag_square.svg.png'
        },
    ],
    messages: [
        {id: 1, message: 'Hellow'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Howdy'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'How are you?'},
    ],
    currentMessage: 'sdf',
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.currentMessage
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.currentMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_TEXT_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.currentMessage = action.message;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE};
}

export const updateNewTextMessageActionCreator = (textMessage) => {
    return {type: UPDATE_NEW_TEXT_MESSAGE, message: textMessage}
}

export default dialogsReducer;