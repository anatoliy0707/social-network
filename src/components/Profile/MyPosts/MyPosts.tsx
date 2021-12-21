import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

import { MyPostsPropsType } from "./MyPostsContainer";




function MyPosts(props: MyPostsPropsType) {
    const postsElement = props.posts.map((post) => (
        <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>
    ));


    const newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPostHandler = () => {
        props.addPost(props.newPostText)
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.changeNewPostText(text)
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
