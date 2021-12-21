import React from "react";
import {addPost, changeNewPostText, profileInitialStateType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

type MapStatePropsType = profileInitialStateType
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    changeNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, changeNewPostText}) (MyPosts)

export default MyPostsContainer;
