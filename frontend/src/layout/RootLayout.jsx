import React from 'react'
import { Outlet } from 'react-router-dom'
import RootNavBar from '../components/navbar/RootNavBar'

const RootLayout = () => {
    return (
        <div>
            <RootNavBar />
            <div className='container'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout
