import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, postType, profilePageType} from "../../../redux/store";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {RootStoreType} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {
    store?: RootStoreType
    // state: profilePageType;
    // dispatch: (action: ActionsTypes) => void
};


function MyPostsContainer(props: MyPostsPropsType) {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const newPostText = store.getState().profilePage.newPostText
                const posts = store.getState().profilePage.posts
                const addPostHandler = () => {
                    store.dispatch(addPostAC(newPostText))
                }
                const onPostChangeHandler = (text: string) => {
                    store.dispatch(changeNewPostTextAC(text))
                }
                return (
                    <MyPosts posts={posts}
                             newPostText={newPostText}
                             addPost={addPostHandler}
                             updateNewPostText={onPostChangeHandler}/>
                )
            }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;
