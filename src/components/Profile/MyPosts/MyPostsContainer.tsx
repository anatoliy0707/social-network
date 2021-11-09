import React from "react";
import {addPostAC, changeNewPostTextAC, profileInitialStateType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import { Dispatch } from "redux";
import MyPosts from "./MyPosts";

type MapStatePropsType = profileInitialStateType
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText: (text: string) => {
            dispatch(changeNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
