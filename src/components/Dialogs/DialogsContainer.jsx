import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessage} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, {addMessage}),
    //withAuthRedirect
)(Dialogs)

// compose позволяет уменьшить запись для обертки контейнерными компонентами (обертка начинается снизу вверх)