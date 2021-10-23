import {ActionsTypes, postType, profilePageType} from "./state";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"

export const profileReducer = (state: profilePageType, action: ActionsTypes) => {

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