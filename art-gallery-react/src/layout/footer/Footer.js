import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



export default function CSSFooter() {

    const navigate = useNavigate()
    const location = useLocation()

    // Ended up declaratively calling navigate in onClick as a callback
    // const handleClick = () => {
    //     navigate(-1)
    // }


    // if (location.pathname === '/css') return null

    return (
        <div className='footer'>
            <button className='footer__button' onClick={() => navigate(-1)} >Back to CSS</button>
        </div>
    )
}

// Added styling in CSS.scss