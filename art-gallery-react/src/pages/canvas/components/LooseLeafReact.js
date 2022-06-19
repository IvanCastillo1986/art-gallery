import React, { useEffect } from 'react'
import looseLeaf from '../../../images/canvas_art/looseLeaf'



export default function LooseLeafReact() {

  useEffect(() => {
    looseLeaf()
  }, [])


  return (
    <div>
      <canvas id="looseLeaf">
        Your browser does not support Canvas
      </canvas>
    </div>
  )
}
