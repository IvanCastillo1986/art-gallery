import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {


  return (
    <div className='Home'>
        <h1>Welcome to the Art Gallery!</h1>
        <h3>We're stocked with the latest in goofy masterpieces from the world's goofiest artists.</h3>
        <h3>Which category would you like to browse?</h3>

        <Link to="css">CSS</Link>
        {' '}
        <Link to="svg">SVG</Link>
        
    </div>
  )
}
