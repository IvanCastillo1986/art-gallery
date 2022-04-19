import React from 'react'
import './styles/navBar.scss'
import { Link } from 'react-router-dom'



export default function NavBar() {

    return (
        <div className='navBar'>
            <Link to="/artgallery/css" >CSS</Link>
            {" | "}
            <Link to="/artgallery/svg" >SVG</Link>
        </div>
    )
}
