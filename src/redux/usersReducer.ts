const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type initialStateType = {
    users: Array<UserType>
}

const initialState: initialStateType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://funpick.ru/wp-content/uploads/2018/01/kak-narisovat-minona.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'i am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://funpick.ru/wp-content/uploads/2018/01/kak-narisovat-minona.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'i am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://funpick.ru/wp-content/uploads/2018/01/kak-narisovat-minona.jpg',
            followed: false,
            fullName: 'Olya',
            status: 'and i am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
}

export const userReducer = (state: initialStateType = initialState, action: UsersActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export type UsersActionsType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}