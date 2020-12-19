import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar state={props.state} />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile state={props.state} /> } />
                    <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} state={props.state} /> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}

export default App;
