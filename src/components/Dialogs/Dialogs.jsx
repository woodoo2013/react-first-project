import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewTextMessageActionCreator} from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateNewTextMessage = () => {
        let textMessage = newMessage.current.value;
        props.dispatch(updateNewTextMessageActionCreator(textMessage));
    }

    let dialogsElements = props.state.dialogsPage.dialogs.map( (dialogElement) => {
        return <DialogItem id={dialogElement.id} name={dialogElement.name} avatar={dialogElement.avatar}/>
        }
    )

    let messages = props.state.dialogsPage.messages.map( (messageElement) => {
        return <MessageItem id={messageElement.id} message={messageElement.message} />
    })

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messages}
                <input onChange={updateNewTextMessage} ref={ newMessage } type="text" value={props.state.dialogsPage.currentMessage}/>
                <button onClick={ addMessage }>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;