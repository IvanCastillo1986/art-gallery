import React from 'react'
import { Link } from 'react-router-dom'



export default function CSSList() {

  return (
    <ul>
        <Link to='/css/pokedex'>Pokedex</Link>
        <br />
        <Link to='/css/placeholder'>Placeholder</Link>
    </ul>
  )
}
