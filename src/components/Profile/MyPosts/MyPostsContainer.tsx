import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, postType, profilePageType, RootStateType} from "../../../redux/store";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {RootStoreType} from "../../../redux/redux-store";

import {connect} from "react-redux";

type MyPostsPropsType = {
    store?: RootStoreType
    // state: profilePageType;
    // dispatch: (action: ActionsTypes) => void
};


const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
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
