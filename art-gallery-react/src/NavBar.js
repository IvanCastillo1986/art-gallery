import React from 'react'
import { Link } from 'react-router-dom'

import './styles/navBar.scss'



export default function NavBar() {

    return (
        <div className='navBar'>
            <Link to="/" className="navBar__home">Art Gallery</Link>
            {" | "}
            <Link to="/css" >CSS</Link>
            {" | "}
            <Link to="/svg" >SVG</Link>
        </div>
    )
}
