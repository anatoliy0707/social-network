import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD-POST"
const DELETE_POST = "DELETE_POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"

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
    profile: ProfileType | null
    status: string
}

const initialState: profileInitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCounter: 12},
        {id: 2, message: "Hi", likesCounter: 10},
        {id: 3, message: "BlaBla", likesCounter: 3},
        {id: 4, message: "AhaHaa", likesCounter: 15},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: profileInitialStateType = initialState, action: ProfileActionsTypes): profileInitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCounter: 0}]
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export type ProfileActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>

export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch<ProfileActionsTypes>) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch<ProfileActionsTypes>) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch<ProfileActionsTypes>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}