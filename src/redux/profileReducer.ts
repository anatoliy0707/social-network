import {ActionsTypes, postType, profilePageType} from "./store";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"


const initialState = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCounter: 12},
            {id: 2, message: "Hi", likesCounter: 10},
            {id: 3, message: "BlaBla", likesCounter: 3},
            {id: 4, message: "AhaHaa", likesCounter: 15},
        ],
        newPostText: ""
    }

export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: postType = {
                id: 5,
                message: action.newPostText,
                likesCounter: 0
            }

            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const changeNewPostTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}