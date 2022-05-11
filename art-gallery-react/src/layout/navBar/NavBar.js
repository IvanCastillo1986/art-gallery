import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.scss'



export default function NavBar() {

    return (
        <nav className='navBar'>
            <Link to="/" className="navBar__home" data-testid="navBar__home">Art Gallery</Link>
            {" | "}
            <Link to="/css" data-testid="navBar__css">CSS</Link>
            {" | "}
            <Link to="/svg" data-testid="navBar__svg">SVG</Link>
        </nav>
    )
}
