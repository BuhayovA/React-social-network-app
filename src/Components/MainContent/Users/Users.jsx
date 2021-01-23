import React from 'react';
import style from './Users.module.css';
import {IconButton} from "@material-ui/core";
import {RiUserFollowLine, RiUserUnfollowLine} from "react-icons/all";


const Users = (props) => {
    let users = [{
        id: 1,
        fullName: 'Alexey B.',
        status: 'I am a boss',
        location: {city: 'Sumy', country: 'Ukraine'},
        imgSrc: 'https://i.redd.it/wellr7jjiv011.jpg',
        followed: true,
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
            followed: true,
        },
        {
            id: 5,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: true,
        },
        {
            id: 6,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: true,
        },
        {
            id: 7,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: true,
        },
        {
            id: 8,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: true,
        },
        {
            id: 9,
            fullName: 'Michail G',
            status: 'I like prog, so much',
            location: {city: 'Sumy', country: 'Ukraine'},
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU',
            followed: true,
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
                        <span>
                            <span>
                                <div>
                                    {user.fullName}
                                </div>
                                <div>
                                    {user.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {user.location.country}
                                </div>
                                <div>
                                    {user.location.city}
                                </div>
                            </span>

                        </span>
                    </div>
                </div>)
            }
        </div>
    );
}
export default Users;
