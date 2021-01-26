import React from 'react'
import LoginReduxForm from "./LoginForm";

const Login = (props) => {

    let onSubmit = (data) => {
        let formData = {
            email: data.login,
            password: data.password,
            rememberMe: data.rememberMe
        }
        props.userLogin(formData)
        props.userAuth()
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;