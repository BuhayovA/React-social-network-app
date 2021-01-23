import React from 'react';
import style from './Users.module.css';
import {IconButton, Input} from "@material-ui/core";
import {RiUserFollowLine, RiUserUnfollowLine} from "react-icons/all";


const Users = (props) => {
    let users = [{
        id: 1,
        fullName: 'Alexey B.',
        status: 'I am a boss',
        location: {city: 'Sumy', country: 'Ukraine'},
        imgSrc: 'https://i.redd.it/wellr7jjiv011.jpg',
        followed: false,
    },
        {
            id: 2,
            fullName: 'Andrey B.',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_014.webp',
            followed: false,
        },
        {
            id: 3,
            fullName: 'Egor S.',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://i.pinimg.com/736x/f5/ec/14/f5ec1493f8cf15a2f2d017ac9afe628d.jpg',
            followed: false,
        },
        {
            id: 4,
            fullName: 'Alexandr H.',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest/top-crop/width/360/height/450?cb=20180911165028',
            followed: false,
        },
        {
            id: 5,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: false,
        },
        {
            id: 6,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: false,
        },
        {
            id: 7,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: false,
        },
        {
            id: 8,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: false,
        },
        {
            id: 9,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: false,
        },
    ]

    if(props.users.length === 0) {
        props.setUsers(users)
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={style.user}>
                            <span>
                            <div><img src={user.imgSrc} alt="Avatar" className='avatar'/></div>
                                {user.followed
                                    ? <IconButton color={"secondary"} children={<RiUserUnfollowLine/>}
                                                  onClick={() => props.unfollow(user.id)}/>
                                    : <IconButton children={<RiUserFollowLine/>} color={"primary"}
                                                  onClick={() => props.follow(user.id)}/>}
                        </span>
                        <span className={style.description}>
                            <span>
                                <div>
                                    {user.fullName}
                                </div>
                                <div className={style.userStatus}>
                                    {user.status}
                                </div>
                            </span>
                        </span>
                        <div className={style.locations}>
                            <div>
                                {user.location.country},
                            </div>
                            <div>
                                {user.location.city}
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}
export default Users;
