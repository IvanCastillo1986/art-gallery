import React from 'react'
import { useLocation } from 'react-router-dom'
import './Footer.scss'



export default function CSSFooter() {

    const location = useLocation()

    if (location.pathname === '/css') return null

    return (
        <div className='footer'>
            <button className='footer__button'>Back to CSS</button>
        </div>
    )
}