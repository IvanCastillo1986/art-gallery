import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {


  return (
    <div>
        <h1>Welcome to the Art Gallery!</h1>
        <p>We're stocked with the latest in goofy masterpieces from the world's goofiest artists</p>
        <p>Which categories would you like to browse?</p>

        <Link to="css">CSS</Link>
        {' '}
        <Link to="svg">SVG</Link>
        
    </div>
  )
}
