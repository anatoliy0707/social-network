import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type TProfileProps = {
    profile: any
}

function Profile(props: TProfileProps) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer  />
        </div>
    );
}

export default Profile;
