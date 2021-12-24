import React, { useEffect, useReducer } from 'react'

import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

import { Context, initialState, reducer } from './Context'

const App = () => {
    const reducerState = JSON.parse(localStorage.getItem('isLogin')) || initialState
    const [state, dispatch] = useReducer(reducer, reducerState)

    useEffect(() => {
        localStorage.setItem('isLogin', JSON.stringify(state))
    }, [state])

    return (
        <Context.Provider value={{state: state, dispatch: dispatch}}>
            <div>
                {state.isLogin
                    ? <PrivateRoute />
                    : <PublicRoute />}
            </div>
        </Context.Provider>
    )
}

export default App
