import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength50 = maxLengthCreator(50)

const DialogForm = (props) => {
        return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'dialogMessage'} validate={[required, maxLength50]} />
            <button >Send</button>
        </form>
    )
}

let DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogForm)

export default DialogReduxForm