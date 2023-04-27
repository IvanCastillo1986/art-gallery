import React, { useState } from 'react'
import { auth } from '../../services/Firebase'


// Here we will handle our route guards in the case where a user is NOT logged in

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(auth)
    const signIn = (e) => {
        e.preventDefault()

        console.log('submitted')
    }

    return (
        <div>
            <h1>Sign in with Email</h1>
            <form onSubmit={signIn}>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your e-mail' />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
    
}
