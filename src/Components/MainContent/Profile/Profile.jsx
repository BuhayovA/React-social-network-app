import React from 'react';
import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     addTextPost={props.addTextPost}
            />
        </div>
    )
}

export default Profile