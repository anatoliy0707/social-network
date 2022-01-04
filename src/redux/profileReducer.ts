import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type postType = {
    id: number;
    message: string;
    likesCounter: number;
}
export type profileInitialStateType = {
    posts: Array<postType>
    newPostText: string
    profile: ProfileType | null
}

const initialState: profileInitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCounter: 12},
        {id: 2, message: "Hi", likesCounter: 10},
        {id: 3, message: "BlaBla", likesCounter: 3},
        {id: 4, message: "AhaHaa", likesCounter: 15},
    ],
    newPostText: "",
    profile: null,
}

export const profileReducer = (state: profileInitialStateType = initialState, action: ProfileActionsTypes): profileInitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCounter: 0}],
                newPostText: ""
            }
        case CHANGE_NEW_TEXT:
            return {...state, newPostText: action.newText}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type ProfileActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof changeNewPostText>
    | ReturnType<typeof setUserProfile>

export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const changeNewPostText = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}


export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch<ProfileActionsTypes>) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}