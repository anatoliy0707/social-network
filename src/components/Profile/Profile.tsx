import React from "react";
import { profilePageType } from "../../redux/state";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  state: profilePageType;
    addPost: () => void
    updateNewPostChange: (newText: string) => void
};

function Profile(props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts newPostText={props.state.newPostText}
               posts={props.state.posts}
               addPost={props.addPost}
               updateNewPostChange={props.updateNewPostChange}
      />
    </div>
  );
}

export default Profile;
