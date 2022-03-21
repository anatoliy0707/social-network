import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostReduxForm, FormDataType} from "./AddPostForm/AddPostForm";


class MyPosts extends React.PureComponent<MyPostsPropsType> {

    // shouldComponentUpdate(nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<{}>): boolean {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    render() {
        const postsElement = this.props.posts.map((post) => (
            <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>
        ));


        const addPostHandler = (formData: FormDataType) => {
            this.props.addPost(formData.postMessage)
        }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddPostReduxForm onSubmit={addPostHandler}/>
                <div className={s.posts}>{postsElement}</div>
            </div>
        );
    }
}

export default MyPosts;
