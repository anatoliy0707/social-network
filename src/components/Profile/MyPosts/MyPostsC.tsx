import React, {ChangeEvent} from "react";


import s from "./MyPosts.module.css";
import Post from "./Post/Post";

import {postType} from "../../../redux/profileReducer";
import { MyPostsPropsType } from "./MyPostsContainer";




class MyPostsC extends React.Component<MyPostsPropsType>{

    postsElement = () => {
        this.props.posts.map((post) => (
            <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>
        ))
    }

    // const newPostElement = React.createRef<HTMLTextAreaElement>()


    addPostHandler = () => {
        this.props.addPost(this.props.newPostText)
    }

    onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        this.props.updateNewPostText(text)
    }

    render(){
        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={this.onPostChangeHandler}  value={this.props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={this.addPostHandler}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>{this.postsElement }</div>
            </div>
        )
    }
}

export default MyPostsC;
