import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Blog from '../pages/Blog'
import ZigZag from '../pages/ZigZag'
import NotFound from '../pages/NotFound'
import ProtectedRoute from '../ProtectedRouteComp/ProtectedRoute'

const RoutesComp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={
                <ProtectedRoute>
                    <Blog />
                </ProtectedRoute>
            } />
            <Route path='/zig-zag' element={
                <ProtectedRoute>
                    <ZigZag />
                </ProtectedRoute>
            } />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    )
}

export default RoutesComp
