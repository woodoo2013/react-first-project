import React from "react";
import Login from "./Login";
import {userAuth, userLogin} from "../../redux/auth-reducer";
import {compose} from "redux";
import {connect} from "react-redux";

class LoginContainer extends React.Component {


    render() {
        return (
            <div>
                <Login userLogin={this.props.userLogin}  userAuth={this.props.userAuth}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
})

export default compose(
    connect(mapStateToProps, {userLogin, userAuth})(LoginContainer)
)