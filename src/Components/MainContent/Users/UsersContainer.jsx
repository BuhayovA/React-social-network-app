import React, {useState} from 'react';
import {connect} from "react-redux";
import {followActionCreator, setUsersAC, unfollowActionCreator, setCurrentPageAC, setTotalUsersCountAC} from "../../../redux/UsersReducer";
import * as axios from "axios";
import Users from "./Users/Users";



class UsersAPIComponent extends React.Component {
    componentDidMount() {
        // this.componentDidUpdate()
        if (!this.props.users.length) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
                .then(response => {
                    let users = response.data.items.map((user) => ({
                        ...user,
                        fullName: user.name,
                        imgSrc: user.photos.small,
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
                    imgSrc: user.photos.small,
                    location: {
                        country: '',
                        city: ''
                    }
                }))
                this.props.setUsers(users)
            })
    }

    render() {
        return <div>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
            />
            </div>
    }
}



let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
export default UsersContainer;
