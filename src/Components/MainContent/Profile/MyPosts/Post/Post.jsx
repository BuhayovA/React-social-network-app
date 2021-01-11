import React from 'react';
import style from "./Post.module.css"
import {BiLike} from 'react-icons/bi';

const Post = (props) => {
    // console.log(props.message);
    // debugger;

    return(
        <div className={style.item}>
            <div className={style.item__element}>
                <img className='avatar' src="https://i.redd.it/wellr7jjiv011.jpg" alt="Avatar"/>
                <div className={style.item__message}>{props.message}</div>
            </div>
            <div className={style.item__like}>
                <span><BiLike color='red'/> {props.likesValue}</span>
            </div>
        </div>
    )
}

export default Post