import React from "react";

import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType;
    addPost: () => void
    updateNewPostChange: (newText: string) => void
};

function App(props: AppPropsType) {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route
                    path="/dialogs"
                    render={() => <Dialogs state={props.state.dialogsPage}/>}
                />
                <Route
                    path="/profile"
                    render={() => <Profile state={props.state.profilePage} addPost={props.addPost}
                                           updateNewPostChange={props.updateNewPostChange}/>}
                />
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/setting" render={() => <Setting/>}/>
            </div>
        </div>

    );
}

export default App;
