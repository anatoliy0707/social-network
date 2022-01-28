import React from "react";
import {addPost, profileInitialStateType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

type MapStatePropsType = profileInitialStateType
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts)

export default MyPostsContainer;
