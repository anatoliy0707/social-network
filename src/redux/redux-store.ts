import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";

export type RootStoreType = typeof store


const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers);



export default store