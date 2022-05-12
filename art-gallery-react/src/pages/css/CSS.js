import React from 'react'
import { Outlet } from 'react-router-dom'

import './CSS.scss'



export default function CSS() {
    

    return (
        <div className='css' >
            <h2>Welcome to the CSS Shop, a subsidiary of Art Gallery</h2>
            <p>Here we have the world's goofiest selection of CSS masterpieces.</p>
            <p>We're way better than SVGs. Just think of how much time it took to draw them.</p>
            <p>All of that code. They don't have easy programs like Inkscape to create these!</p>
            <p>Which carefully keycrafted work of art would you like to peruse?</p>

            <Outlet />

        </div>
    )

}





// The <Outlet /> component is used as a Placeholder for child component (whichever child is routed by URL)