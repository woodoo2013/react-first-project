import React from 'react';
import style from './Dialogs.module.css'


const Dialogs = (props) => {

    let newMessage = React.createRef()

    let onAddMessage = () => {
        props.addMessage();
    }

    let onUpdateNewTextMessage = () => {
        let textMessage = newMessage.current.value;
        props.updateNewTextMessage(textMessage);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {props.dialogsElements}
            </div>
            <div className={style.messages}>
                {props.messages}
                <input onChange={onUpdateNewTextMessage} ref={newMessage} type="text" value={props.dialogsPage.currentMessage}/>
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;