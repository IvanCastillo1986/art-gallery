import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'



export default function Home(props) {



  return (
    <div className='home'>
        <h1 className='home__title'>Welcome to Coder's Corner!</h1>
        <h3>We're stocked with the latest in goofy masterpieces from the world's goofiest artists.</h3>
        <p>{props.about}</p>
        <p>The art on this website is created with code.</p>
        <p>Whether it's drawn with CSS, SVG, or even bitmap traces, we've got your niche here!</p>
        <p>Pixel art friendly!</p>
        <h3 className='home__prompt'>Which category would you like to browse?</h3>

        <div className="home__linkDiv">
          <Link to="css">CSS</Link>
        {' '}
          <Link to="svg">SVG</Link>
        </div>
        
    </div>
  )
}
