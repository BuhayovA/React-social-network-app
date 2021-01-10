import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {

    let postElements = props.postsData.map(element => <Post message={element.message} likesValue={element.likesValue}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onChangePostInput = () => {
        let text = newPostElement.current.value;
        props.addTextPost(text);
    }

    return (
        <div className={style.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangePostInput} name="Add new post" placeholder="Write a message..." ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost} disabled={!props.newPostText}> Add</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
                {/*<Post message={postsData[0].message} likesValue={postsData[0].likesValue}/>*/}
                {/*<Post message={postsData[1].message} likesValue={postsData[1].likesValue}/>*/}
                {/*<Post message={postsData[2].message} likesValue={postsData[2].likesValue}/>*/}
            </div>
        </div>
    )
}

export default MyPosts