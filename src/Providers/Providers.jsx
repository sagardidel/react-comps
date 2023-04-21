import React from 'react'
import UserContextProvider from '../context/UserContext'

const Providers = ({ children }) => {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}

export default Providers