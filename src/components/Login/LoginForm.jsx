import React from 'react'
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} component={'input'} name={'login'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} component={'input'} name={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'} /> Remember me
                </div>
                <div>
                    <button type={'submit'}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm