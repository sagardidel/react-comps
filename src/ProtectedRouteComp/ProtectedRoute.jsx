import { useEffect, useContext } from "react"

import { useNavigate, useLocation } from 'react-router-dom'

import { UserContext } from "../context/UserContext"

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        if (!user.isLoggedIn && location.pathname === '/') return
        if (!user.isLoggedIn) return navigate('/')
    }, [user.isLoggedIn])

    return children

}

export default ProtectedRoute
