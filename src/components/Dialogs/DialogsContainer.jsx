import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessage, updateNewTextMessage} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogs.map( (dialogElement) => {
            return <DialogItem key={dialogElement.id} id={dialogElement.id} name={dialogElement.name} avatar={dialogElement.avatar}/>
        }),
        messages: state.dialogsPage.messages.map( (messageElement) => {
            return <MessageItem key={messageElement.id} id={messageElement.id} message={messageElement.message} />
        }),
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewTextMessage})(Dialogs)

export default DialogsContainer;