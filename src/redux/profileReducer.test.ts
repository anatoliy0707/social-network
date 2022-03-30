import {addPost, deletePost, profileInitialStateType, profileReducer} from "./profileReducer";

const initialState: profileInitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCounter: 12},
        {id: 2, message: "Hi", likesCounter: 10},
        {id: 3, message: "BlaBla", likesCounter: 3},
        {id: 4, message: "AhaHaa", likesCounter: 15},
    ],
    profile: null,
    status: ''
}

test('new post should be added', () => {
    const action = addPost('new post')
    const newState = profileReducer(initialState, action)
// expectation
    expect(newState.posts.length).toBe(5)
})


test('new post message should be correct', () => {
    const action = addPost('new post')
    const newState = profileReducer(initialState, action)
// expectation
    expect(newState.posts[4].message).toBe('new post')
})

test('after deleting length of message should be decrement', () => {
    const action = deletePost(1)
    const newState = profileReducer(initialState, action)
// expectation
    expect(newState.posts.length).toBe(3)
})

test('after deleting length of message should`t be decrement if id incorrect', () => {
    const action = deletePost(89)
    const newState = profileReducer(initialState, action)
// expectation
    expect(newState.posts.length).toBe(4)
})