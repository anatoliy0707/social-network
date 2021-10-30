import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {ActionsTypes, RootStateType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {RootStoreType} from "./redux/redux-store";


type AppPropsType = {
    state: RootStateType;
    dispatch: (action: ActionsTypes) => void
    store: RootStoreType
};

function App(props: AppPropsType) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <DialogsContainer store={props.store}  />}
                />
                <Route
                    path="/profile"
                    render={() => <Profile store={props.store} />}
                />
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/setting" render={() => <Setting/>}/>
            </div>
        </div>

    );
}

export default App;
