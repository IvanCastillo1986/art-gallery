import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../../components/login/Login'

import './LoginPage.scss'



// renders when our users are *not* logged in

export default function LoginPage() {




    return (
        <div className='login-page'>
            <Login />
            <Link to='/signup'>Not Signed Up? Click here!</Link>
        </div>
    )
}
