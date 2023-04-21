import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


const initialUser = {
    id: '',
    name: '',
    isLoggedIn: false
}

export const UserContext = createContext(null)



const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(initialUser)

    return (
        <UserContext.Provider value={{ user, setUser }}  >{children}</UserContext.Provider>
    )
}

export default UserContextProvider