import React, {useEffect, useState} from 'react';
import style from './Users.module.css';
import {
    Avatar, CircularProgress, Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import {RiUserFollowLine, RiUserUnfollowLine} from "react-icons/all";
import {fetchUsers, fetchUsersPromise} from "./utils";



const Users = ({users,setUsers, follow, unfollow }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        setIsLoading(true)
        fetchUsersPromise()
            .then((data) => {
            setUsers(data)
            setIsLoading(false)
        })
    }, [setUsers])

    return (
        isLoading
        ?<div className={style.progress}>
                <CircularProgress />
            </div>
        :<List>
            {
                users.map(user => <>
                    <ListItem className={style.user}>
                        <ListItemAvatar>
                            <Avatar>
                                {
                                    user.imgSrc
                                        ?<img src={user.imgSrc} alt="Avatar" className='avatar'/>
                                        :<Avatar className={style.avatarColor}>{user.name[0].toUpperCase()}</Avatar>
                                }
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.fullName} secondary={user.status}/>

                        <ListItemSecondaryAction style={{display: 'flex', alignItems: 'center'}}>
                            <Typography
                                variant='caption'>{`${user.location.country}, ${user.location.city}`}
                            </Typography>
                            {user.followed
                                ? <IconButton color={"secondary"} children={<RiUserUnfollowLine/>}
                                              onClick={() => unfollow(user.id)}/>
                                : <IconButton children={<RiUserFollowLine/>} color={"primary"}
                                              onClick={() => follow(user.id)}/>}
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>

                </>)
            }
        </List>
    );
}
export default Users;
