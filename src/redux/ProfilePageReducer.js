const ADD_POST = 'ADD-POST';
const ADD_TEXT_POST = 'ADD-TEXT-POST';

let initialState = {
    posts: [
        {id: 1, message: `Hi, how are you ?`, likesValue: 54},
        {id: 2, message: `Happy birthday, for me`, likesValue: 21},
        {id: 3, message: `It's my first post!`, likesValue: 67},
        {id: 3, message: `It's my first post!`, likesValue: 67},
    ],
    newPostText: '',
}


const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesValue: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [newPost , ...state.posts],
            }
        }
        case ADD_TEXT_POST: {
            return {
                ...state,
                newPostText: action.text,
            }
        }
        default:
            return state
    }
}


export const addTextPostActionCreator = (text) => ({
    type: ADD_TEXT_POST,
    text: text
})
export const addPostActionCreator = () => ({type: ADD_POST})

export default profilePageReducer