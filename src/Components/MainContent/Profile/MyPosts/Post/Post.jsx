import React from 'react';
import style from "./Post.module.css"

const Post = (props) => {
    // console.log(props.message);
    // debugger;

    return(
        <div className={style.item}>
            <img src="https://i.redd.it/wellr7jjiv011.jpg" alt="Avatar"/>
            {props.message}
            <div>
                <span>Like {props.likesValue}</span>
            </div>
        </div>
    )
}

export default Post