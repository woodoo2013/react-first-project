import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControl";

let maxLengthField = maxLengthCreator(30)

const PostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea} name={'message'} validate={[required, maxLengthField]} placeholder={'Post message'} />
                <button type={'submit'} >Send</button>
            </form>
    )
}

let PostReduxForm = reduxForm({
    form: 'post'
})(PostForm)

export default PostReduxForm