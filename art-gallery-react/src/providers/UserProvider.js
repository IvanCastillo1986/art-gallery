import React, { useState, useEffect, createContext } from 'react'

import { auth } from '../services/Firebase'

// The purpose of this file is to render a component that handles interaction 
// with the logic from Firebase.js

// THIS FILE WILL CREATE A COMPONENT THAT INTERACTS WITH FIREBASE,
// RETURN A 'USER' OBJECT AND RENDERS A PROVIDER THAT OTHER 
// COMPONENTS CAN ACCESS

const UserContext = createContext()

export default function UserProvider() {

    const [user, setUser] = useState(null)


    useEffect(() => {

    }, [])
    
    return (
        <div>
            UserProvider
        </div>
    )
}

// A React Context -
// allows us to access state that is globally available (without having to pass props up or down levels)