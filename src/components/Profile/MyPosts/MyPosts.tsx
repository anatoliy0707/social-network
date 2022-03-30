import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostReduxForm, FormDataType} from "./AddPostForm/AddPostForm";


const MyPosts = React.memo((props: MyPostsPropsType) => {
    const postsElement = props.posts.map((post) => (
        <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>
    ));

    const addPostHandler = (formData: FormDataType) => {
        props.addPost(formData.postMessage)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addPostHandler}/>
            <div className={s.posts}>{postsElement}</div>
        </div>
    );
});

export default MyPosts;
