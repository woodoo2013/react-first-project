import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewTextMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogs.map( (dialogElement) => {
            return <DialogItem id={dialogElement.id} name={dialogElement.name} avatar={dialogElement.avatar}/>
        }),
        messages: state.dialogsPage.messages.map( (messageElement) => {
            return <MessageItem id={messageElement.id} message={messageElement.message} />
        }),
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewTextMessage: (textMessage) => {
            dispatch(updateNewTextMessageActionCreator(textMessage));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;