import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './Canvas.scss'

import CanvasIntro from './components/CanvasIntro'
import LooseLeafReact from './components/LooseLeafReact'
import CanvasPlaceholder from './components/CanvasPlaceholder'
import Footer from '../../layout/footer/Footer'
import NotFound from '../not-found/NotFound'

import {canvasArtList} from './components/CanvasArtList'


export default function Canvas() {

  const location = useLocation()

  const artRoute = canvasArtList.map(el => 
    <Route 
      path={`${el.urlPath}`}
      element={`<${el.name}/>`}
    />

  )

  
  return (
    <div className='canvas'>
      <Routes>
        <Route index element={<CanvasIntro />} />
        <Route path="loose-leaf" element={<LooseLeafReact />} />
        <Route path="placeholder" element={<CanvasPlaceholder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {location.pathname === '/canvas' ? null : <Footer pageName='Canvas' />}
    </div>
  )
}
