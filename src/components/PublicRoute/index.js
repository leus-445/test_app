import React, { useContext, useState } from 'react'

import { Context } from '../../Context'

const PublicRoute = () => {
    const [credentials, setCredentials] = useState({login: '', password: ''})
    const context = useContext(Context)

    const handleLoginFormSubmit = (e) => {
        e.preventDefault()
        const { login, password } = credentials

        login && password && context.dispatch('login')
    }

    const handleInputChange = (e) => {
        setCredentials({...credentials, [e.target.id]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleLoginFormSubmit}>
                <label htmlFor='login'>Login</label>
                <input type='text' id='login' onChange={handleInputChange} />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onChange={handleInputChange} />
                <input type='submit' value='login' />
            </form>
        </div>
    )
}

export default PublicRoute
