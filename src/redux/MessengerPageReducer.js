const ADD_TEXT_MESSAGE = 'ADD-TEXT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alexey', imgSrc: 'https://i.redd.it/wellr7jjiv011.jpg'},
        {
            id: 2,
            name: 'Andrey',
            imgSrc: 'https://chpic.su/_data/stickers/t/thelegendofaang/thelegendofaang_014.webp'
        },
        {
            id: 3,
            name: 'Maxim',
            imgSrc: 'https://i.pinimg.com/736x/f5/ec/14/f5ec1493f8cf15a2f2d017ac9afe628d.jpg'
        },
        {
            id: 4,
            name: 'Egor',
            imgSrc: 'https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest/top-crop/width/360/height/450?cb=20180911165028'
        },
        {
            id: 5,
            name: 'Alexander',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyHlJd0ANpNKR2eD-EzQjJjDjBk1lHJOT_A&usqp=CAU'
        },
        {
            id: 6,
            name: 'Mikhail',
            imgSrc: 'https://c0.klipartz.com/pngpicture/164/223/gratis-png-discord-avatar-personaje-digital-arte-avatar.png'
        },
    ],
    messages: [
        {id: 1, message: `Hello`},
        {id: 2, message: `How are you?`},
        {id: 3, message: `Happy birthday, for me`},
        {id: 4, message: 'Egor'},
        {id: 5, message: `This is my firth post`},
    ],
    newMessage: '',
};

const messengerPageReducer = (state = initialState, action) => {
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