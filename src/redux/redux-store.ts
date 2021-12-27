import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./usersReducer";
import {authReducer} from "./authReducer";




const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer
})

const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store

export default store