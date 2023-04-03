import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Footer from '../../../layout/footer/Footer'
import { canvasArtList } from './CanvasArtList'
import '../Canvas.scss'


export default function CanvasIntro() {

  const location = useLocation()
  console.log(location)

  const links = canvasArtList.map(el =>
    <Link to={el.urlPath} key={el.name}>
      {el.name}
    </Link>
  )


  return (
    <div className='intro'>

        <h2 className='intro__welcome'>Welcome to the Canvas Shop, a subsidiary of Code Canvas Corner</h2>
        <p>Here we have the world's goofiest collection of code curated from HTML Canvas.</p>
        <p>Our artists have really taken 'The art of code' literally with these.</p>
        <p>If you think that using JavaScript to create art is easy, think again.</p>
        <p>Nothing more beautiful than the amalgam of logic and art.</p>

        <ul className='intro__contentList' data-testid='intro__contentList'>
          {links}
        </ul>
        
    </div>
  )
}
