import {combineReducers, createStore} from "redux";
import profilePageReducer from "./ProfilePageReducer";
import messengerPageReducer from "./MessengerPageReducer";
import friendsNavReducer from "./FriendsNavReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messengerPage: messengerPageReducer,
    friendsNav: friendsNavReducer,
});



let store = createStore(reducers);


window.store = store

// if (localStorage.getItem("state")){
//     store.state = JSON.parse(localStorage.getItem("state"))
// }

export default store