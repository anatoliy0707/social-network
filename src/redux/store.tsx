import {addPostAC, changeNewPostTextAC, profileReducer} from "./profileReducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


export type StoreType = {
    _state: RootStateType
    rerenderEntireTree: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>

export type dialogType = {
    id: number;
    name: string;
};
export type messageType = {
    id: number;
    message: string;
};
export type postType = {
    id: number;
    message: string;
    likesCounter: number;
};
export type profilePageType = {
    posts: Array<postType>;
    newPostText: string
};
export type dialogsPageType = {
    messages: Array<messageType>;
    dialogs: Array<dialogType>;
    newMessageBody: string
};
export type sidebarType = {};
export type RootStateType = {
    profilePage: profilePageType;
    dialogsPage: dialogsPageType;
    sidebar: sidebarType;
};

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCounter: 12},
                {id: 2, message: "Hi", likesCounter: 10},
                {id: 3, message: "BlaBla", likesCounter: 3},
                {id: 4, message: "AhaHaa", likesCounter: 15},
            ],
            newPostText: ""
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    rerenderEntireTree() {
        console.log('state changed')
    },

    subscriber(observer: () => void) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this.rerenderEntireTree()

    }
}

export default store;

