import React from 'react';
import style from "./Post.module.css"
import {BiLike} from 'react-icons/bi';
import Button from '@material-ui/core/Button'

const Post = (props) => {
    // console.log(props.message);
    // debugger;

    return(
        <div className={style.item}>
            <div className={style.item__element}>
                <img className='avatar' src="https://i.redd.it/wellr7jjiv011.jpg" alt="Avatar"/>
                <div className={style.item__message}>{props.message}</div>
            </div>
            <div>
                <Button size={'small'} color={'primary'} startIcon={<BiLike color='red'/> } variant={'contained'}>{props.likesValue}</Button>
            </div>
        </div>
    )
}

export default Post