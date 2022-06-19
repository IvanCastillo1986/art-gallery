import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Canvas.scss'

import CanvasIntro from './components/CanvasIntro'
import LooseLeafReact from './components/LooseLeafReact'
import NotFound from '../not-found/NotFound'


export default function Canvas() {

  return (
    <div>
      <Routes>
        <Route index element={<CanvasIntro />} />
        <Route path="loose-leaf" element={<LooseLeafReact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
