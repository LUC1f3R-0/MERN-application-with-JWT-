import React from 'react'
import { NavLink } from 'react-router-dom'

const RootNavBar = () => {
    return (
        <>
            <section>
                <div className='nav-bar'>
                    <ul>
                        <NavLink to='/login'><li>Login</li></NavLink>
                        <NavLink to='/register'><li>Register</li></NavLink>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default RootNavBar
