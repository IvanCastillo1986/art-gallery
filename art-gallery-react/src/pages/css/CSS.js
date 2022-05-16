import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import CSSIntro from './components/CSSIntro'
import CSSPlaceholder from './components/CSSPlaceholder'
import Pokedex from '../../images/css_art/pokedex/Pokedex'
import NotFound from '../not-found/NotFound'
import CSSFooter from '../../layout/footer/Footer'

import { cssArtList } from './CSSArtList'
import './CSS.scss'


export default function CSS() {

    const location = useLocation()

    // How to get this to work, to render different routes
    const artRoute = cssArtList.map(el => 
        <Route 
            path={`${el.urlPath}`} 
            element={`<${el.name}/>`}
        />
    )

    
    return (
        <div className='css' >

            <Routes>
                <Route index element={<CSSIntro />} />
                <Route path="pokedex" element={<div className='artDiv'><Pokedex /></div>} />
                <Route path="placeholder" element={<div className="artDiv"><CSSPlaceholder /></div>} />
                <Route path="*" element={<NotFound />} />
            </Routes>



            {/* if  location.pathname  is not '/css' then render Footer. 
            useLocation() is invoked in <CSSFooter> component with if() conditional rendering */}
            {location.pathname === '/css' ? null : <CSSFooter />}
            {/* <CSSFooter /> */}

        </div>
    )

}





// The <Outlet /> component is used as a placeholder for child component (whichever child is routed by URL)