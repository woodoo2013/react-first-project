import React from 'react'
import {Field, reduxForm} from 'redux-form'

const PostForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Field component={'input'} name={'message'}  />
                <button type={'submit'} >Send</button>
            </form>
    )
}

let PostReduxForm = reduxForm({
    form: 'post'
})(PostForm)

export default PostReduxForm