import React from 'react';
import {
    Avatar, Divider, IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    Typography
} from "@material-ui/core";
import style from "../Users.module.css";
import {RiUserFollowLine, RiUserUnfollowLine} from "react-icons/all";
import {Pagination} from "@material-ui/lab";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <List>

            {/*<div style={{padding: "10px"}}>*/}
            {/*    {*/}
            {/*        pages.map(page => {*/}

            {/*            return <span style={{cursor: "pointer", "padding-left": "5px"}}*/}
            {/*                         onClick={() => this.onPageChanged(page) }*/}
            {/*                         className={this.props.currentPage === page ? style.selectedPage : ""}>{page}</span>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
            {

                props.users.map(user => <>
                    <ListItem className={style.user}>
                        <ListItemAvatar>
                            <Avatar>
                                {
                                    user.imgSrc
                                        ? <img src={user.imgSrc} alt="Avatar" className='avatar'/>
                                        : <Avatar alt="Remy Sharp"
                                                  style={{background: "#6200ee"}}>{user.fullName[0].toUpperCase()}</Avatar>
                                }
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={user.fullName} secondary={user.status}/>

                        <ListItemSecondaryAction style={{display: 'flex', alignItems: 'center'}}>
                            <Typography
                                variant='caption'>{`${user.location.country}, ${user.location.city}`}</Typography>
                            {user.followed
                                ? <IconButton color={"secondary"} children={<RiUserUnfollowLine/>}
                                              onClick={() => props.unfollow(user.id)}/>
                                : <IconButton children={<RiUserFollowLine/>} color={"primary"}
                                              onClick={() => props.follow(user.id)}/>}
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>

                </>)
            }
            <ListItem>
                <Pagination onChange={(event, page) => props.onPageChanged(page)}
                            page={props.currentPage}
                            count={pagesCount}
                />
            </ListItem>
        </List>


    );
}


export default Users