import React from 'react';
import style from './Dialogs.module.css'
import DialogForm from "./DialogForm";


const Dialogs = (props) => {

    let onSubmit = (dialogMessage) => {
        props.addMessage(dialogMessage.dialogMessage);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {props.dialogsElements}
            </div>
            <div className={style.messages}>
                {props.messages}
                <DialogForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs;