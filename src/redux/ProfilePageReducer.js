import { createSelector } from 'reselect'
const ADD_POST = 'ADD-POST';
const ADD_TEXT_POST = 'ADD-TEXT-POST';

let initialState = {
    posts: [
        {id: 1, message: `Hi, how are you ?`, likesValue: 54},
        {id: 2, message: `Happy birthday, for me`, likesValue: 21},
        {id: 3, message: `It's my first post!`, likesValue: 67},
    ],
        newPostText: '',
}


const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesValue: 0
            };
            state.posts = [ ...state.posts, newPost];
            state.newPostText = ''
            return {...state}
        case ADD_TEXT_POST:
            state.newPostText = action.text
            return state
        default:
            return state
    }
}


export const addTextPostActionCreator = (text) => ({
    type: ADD_TEXT_POST,
    text: text
})
export const addPostActionCreator = () => ({type: ADD_POST})

export const proflePageSelector = (state) => state.profilePage

export const profilePostsSelector = createSelector(proflePageSelector, (profilePage) => profilePage.posts)


export default profilePageReducer