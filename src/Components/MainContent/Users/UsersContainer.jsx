import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followActionCreator, setUsersAC, unfollowActionCreator} from "../../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
