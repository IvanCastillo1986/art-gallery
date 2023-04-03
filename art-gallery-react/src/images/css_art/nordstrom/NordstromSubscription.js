import React from 'react'

import './NordstromSubscription.scss'


export default function NordstromSubscription() {




  return (
    <div className='subscription'>
      <h1>Nordstrom Email Subscription created with Vanilla CSS</h1>
      
      <div className="subscription__container">
        <form className="subscription__email-form" onSubmit={(e) => e.preventDefault()}>
          <label for="email-input">Get Email Updates:</label>
          <input type="text" className="subscription__email-input" placeholder="Email Address" />
          <input type="submit" className="subscription__button" value="Sign up" />
        </form>
      </div>
      
    </div>
  )
}

