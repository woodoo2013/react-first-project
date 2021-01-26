import React from 'react'
import {Field, reduxForm} from "redux-form";

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'input'} name={'dialogMessage'} />
            <button >Send</button>
        </form>
    )
}

let DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogForm)

export default DialogReduxForm