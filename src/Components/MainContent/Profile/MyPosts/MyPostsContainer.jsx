import React from 'react';
import {addPostActionCreator, addTextPostActionCreator} from '../../../../redux/ProfilePageReducer'
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";


const MyPostsContainer = (props) => {
    // let state = props.store.getState();
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onChangePostInput = (text) => {
                        store.dispatch(addTextPostActionCreator(text))
                    }
                    return <MyPosts addPost={addPost}
                                    addTextPost={onChangePostInput}
                                    postsData={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer