import React from 'react';
import style from './Users.module.css';
import { Pagination } from '@material-ui/lab';
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
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
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
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
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

    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
        return (
            <List>
                <Pagination   count={pagesCount}/>
                <div style={{padding: "10px"}}>
                    {
                        pages.map(page => {

                            return <span style={{cursor: "pointer", "padding-left": "5px"}}
                                         onClick={() => this.onPageChanged(page) }
                                         className={this.props.currentPage === page ? style.selectedPage : ""}>{page}</span>
                        })
                    }
                </div>
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
