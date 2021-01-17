import React from 'react';
import {addPostActionCreator, addTextPostActionCreator} from '../../../../redux/ProfilePageReducer'
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onChangePostInput = (text) => {
        props.store.dispatch(addTextPostActionCreator(text))
    }

    return (<MyPosts addPost={addPost}
                     addTextPost={onChangePostInput}
                     postsData={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer