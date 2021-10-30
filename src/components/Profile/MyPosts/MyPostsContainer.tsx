import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, postType, profilePageType} from "../../../redux/store";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {RootStoreType} from "../../../redux/redux-store";

type MyPostsPropsType = {
    store: RootStoreType
    // state: profilePageType;
    // dispatch: (action: ActionsTypes) => void
};


function MyPostsContainer(props: MyPostsPropsType) {

    const newPostText = props.store.getState().profilePage.newPostText
    const posts = props.store.getState().profilePage.posts

    const addPostHandler = () => {
        props.store.dispatch(addPostAC(newPostText))
    }

    const onPostChangeHandler = (text: string) => {
        props.store.dispatch(changeNewPostTextAC(text))
    }

    return (
        <MyPosts posts={posts}
                 newPostText={newPostText}
                 addPost={addPostHandler}
                 updateNewPostText={onPostChangeHandler}
        />
    );
}

export default MyPostsContainer;
