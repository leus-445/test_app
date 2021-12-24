import React, { useContext } from 'react'

import { Context } from '../../Context'

const PrivateRoute = () => {
    const context = useContext(Context)

    const handleLogoutButtonClick = () => {
        context.dispatch('logout')
    }

    return (
        <div>
            <h1>Hi Marcus!</h1>
            <button onClick={handleLogoutButtonClick}>Logout</button>
        </div>
    )
}

export default PrivateRoute
