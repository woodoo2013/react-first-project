import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";



const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar state={props.state} />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile state={props.state} dispatch={props.dispatch} store={props.store} /> } />
                    <Route path='/dialogs' render={ () => <Dialogs state={props.store.getState()}  dispatch={props.dispatch}/> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
    );
}

export default App;
