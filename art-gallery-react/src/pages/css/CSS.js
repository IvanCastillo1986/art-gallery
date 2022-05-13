import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CSSIntro from './components/CSSIntro'
import CSSPlaceholder from './components/CSSPlaceholder'
import Pokedex from '../../images/css_art/pokedex/Pokedex'
import NotFound from '../not-found/NotFound'

import './CSS.scss'



export default function CSS() {

    // if the page is rendering any artwork component, include footer with back to CSS button
    // else, render Intro component

    return (
        <div className='css' >

            <Routes>
                <Route path="/" element={<CSSIntro />} />
                <Route path="pokedex" element={<Pokedex />} />
                <Route path="placeholder" element={<CSSPlaceholder />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    )

}





// The <Outlet /> component is used as a placeholder for child component (whichever child is routed by URL)