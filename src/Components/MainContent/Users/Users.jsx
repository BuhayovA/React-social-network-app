import React from 'react';
import style from './Users.module.css';
import {
    Avatar, Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import {RiUserFollowLine, RiUserUnfollowLine} from "react-icons/all";
import * as axios from "axios";


class Users extends React.Component{
    componentDidMount() {
        if (!this.props.users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=20')
                .then(response => {
                    let users = response.data.items.map((user) => ({
                        ...user,
                        fullName: user.name,
                        imgSrc:user.photos.small,
                        location: {
                            country: '',
                            city: ''
                        }
                    }))
                    this.props.setUsers(users)
                })
        }
    }
    render(){
        return (
            <List>
                {
                    this.props.users.map(user => <>
                        <ListItem className={style.user}>
                            <ListItemAvatar>
                                <Avatar>
                                    {
                                        user.imgSrc
                                            ? <img src={user.imgSrc} alt="Avatar" className='avatar'/>
                                            : <Avatar alt="Remy Sharp" style={{background: "#6200ee"}} >{user.fullName[0].toUpperCase()}</Avatar>
                                    }
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={user.fullName} secondary={user.status}/>

                            <ListItemSecondaryAction style={{display: 'flex', alignItems: 'center'}}>
                                <Typography
                                    variant='caption'>{`${user.location.country}, ${user.location.city}`}</Typography>
                                {user.followed
                                    ? <IconButton color={"secondary"} children={<RiUserUnfollowLine/>}
                                                  onClick={() => this.props.unfollow(user.id)}/>
                                    : <IconButton children={<RiUserFollowLine/>} color={"primary"}
                                                  onClick={() => this.props.follow(user.id)}/>}
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider/>

                    </>)
                }
            </List>
        );
    }
}

export default Users;
