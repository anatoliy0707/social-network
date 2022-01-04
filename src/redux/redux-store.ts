import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'




const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store

export default store