import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Canvas.scss'

import CanvasIntro from './components/CanvasIntro'
import NotFound from '../not-found/NotFound'


export default function Canvas() {

  return (
    <div>
      <Routes>
        <Route index element={<CanvasIntro />} />
        {/* <Route path="pokedex" element={<div className='artDiv'><Pokedex /></div>} />
        <Route path="placeholder" element={<div className="artDiv"><CSSPlaceholder /></div>} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
