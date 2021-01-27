import React from "react";
import Login from "./Login";
import {userAuth, userLogin} from "../../redux/auth-reducer";
import {compose} from "redux";
import {connect} from "react-redux";

class LoginContainer extends React.Component {
    render() {
        return (
            <div>
                <Login userLogin={this.props.userLogin}  userAuth={this.props.userAuth} isAuth={this.props.isAuth}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {userLogin, userAuth})(LoginContainer)
)