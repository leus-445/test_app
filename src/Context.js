import { createContext } from 'react'

export const Context = createContext()

export const initialState = {
    isLogin: false
}

export const reducer = (state, action) => {
    switch (action) {
        case 'login':
            return {...state, isLogin: true}
        case 'logout':
            return {...state, isLogin: false}
        default:
            return state
    }
}