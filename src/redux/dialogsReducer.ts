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
    ]
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: DialogsActionsTypes): DialogsInitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            debugger
            return {...state, messages: [...state.messages, {id: 6, message: action.message}]}
        default:
            return state
    }
}

export type DialogsActionsTypes = ReturnType<typeof sendMessage>

export const sendMessage = (message: string) => {
    return {
        type: SEND_MESSAGE,
        message
    } as const
}
