import React from 'react'
import { Link } from 'react-router-dom'



export default function ArtGallery() {

    return (
        <div>
            <h1>Welcome to the Art Gallery!</h1>
            <p>Would you like to see my rarest collection of CSS or SVG artwork?</p>

            <Link to="/css">CSS</Link>
            <Link to="/svg">SVG</Link>
        </div>
    ) 
}
