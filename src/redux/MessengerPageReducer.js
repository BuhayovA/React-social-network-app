const ADD_TEXT_MESSAGE = 'ADD-TEXT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


const messengerPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let addNewMassage = {
                id: state.length + 1,
                message: state.newMessage,
            }

            state.messages.push(addNewMassage);
            state.newMessage = ''
            return state
        case ADD_TEXT_MESSAGE:
            state.newMessage = action.text
            return state
        default:
            return state
    }
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE,})
export const addTextMessageActionCreator = (text) => ({
    type: ADD_TEXT_MESSAGE,
    text: text
})

export default messengerPageReducer