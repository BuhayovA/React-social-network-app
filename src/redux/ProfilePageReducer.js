const ADD_POST = 'ADD-POST';
const ADD_TEXT_POST = 'ADD-TEXT-POST';

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesValue: 0
            };
            state.posts.push(newPost);
            state.newPostText = ''
            return state
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

export default profilePageReducer