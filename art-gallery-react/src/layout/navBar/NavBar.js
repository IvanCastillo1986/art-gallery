import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.scss'



export default function NavBar() {

    return (
        <nav className='navBar'>
            
            <Link to="/" className="navBar__home" data-testid="navBar__home"><div className='linkDiv'>Code Canvas Corner</div></Link>
            
            <span className='line'></span>
            
            <Link to="css" data-testid="navBar__css"><div className='linkDiv'>CSS</div></Link>
            
            <span className='line'></span>
            
            <Link to="svg" data-testid="navBar__svg"><div className='linkDiv'>SVG</div></Link>
            
            <span className='line'></span>

            <Link to="canvas" data-testid="navBar__canvas"><div className='linkDiv'>Canvas</div></Link>
            
        </nav>
    )
}
