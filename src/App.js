import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar state={props.state} />
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/users' render={ () => <UsersContainer/> }/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={LoginContainer}/>
                </div>
            </div>
    );
}

export default App;
