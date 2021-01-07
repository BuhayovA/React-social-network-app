import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {

    let postElements = props.postsData.map(element => <Post message={element.message} likesValue={element.likesValue}/> )

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={style.myPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="Add new post" ref={newPostElement} cols="30" rows="2"></textarea>
                </div>
                <div>
                    <button onClick={addPost}> Add</button>
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