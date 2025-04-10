import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import RootLayout from '../layout/RootLayout'
import AuthLayout from '../layout/AuthLayout'
import Index from '../pages/Index'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<Index />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
            </>
        )
    )

    return <RouterProvider router={router} />
}

export default AppRouter
