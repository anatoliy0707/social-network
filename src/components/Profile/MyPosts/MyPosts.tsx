import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, postType} from "../../../redux/store";
import {addPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsPropsType = {
    posts: Array<postType>;
    newPostText: string
    dispatch: (action: ActionsTypes) => void
};


function MyPosts(props: MyPostsPropsType) {
    const postsElement = props.posts.map((post) => (
        <Post message={post.message} likesCounter={post.likesCounter}/>
    ));


    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(changeNewPostTextAC(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElement}</div>
        </div>
    );
}

export default MyPosts;
