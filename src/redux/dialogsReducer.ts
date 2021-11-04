

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

export type DialogsInitialStateType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}

const initialState: DialogsInitialStateType = {
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ],
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: DialogsActionsTypes): DialogsInitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            // state.newMessageBody = action.body
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            const body = state.newMessageBody
            // state.messages.push({id: 6, message: body})
            return {...state, messages: [...state.messages, {id: 6, message: body}], newMessageBody: ''}
        default:
            return state
    }
}

export type DialogsActionsTypes = ReturnType<typeof sendMessageAC> |  ReturnType<typeof updateNewMessageBodyAC>

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}