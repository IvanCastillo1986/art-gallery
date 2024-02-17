import React from 'react'



export default function SignUpPage() {


    
    return (
        <div className='signUpPage'>
            <h1>Sign up with E-mail</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder='Enter your e-mail'></input>
                <input type="password" placeholder='Enter your password'></input>
                <input type="submit" value='Sign Up' />
            </form>
        </div>
    )
}
