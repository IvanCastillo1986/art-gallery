import div from 'react'
import { Link } from 'react-router-dom'
import { cssArtList } from '../CSSArtList'
import '../CSS.scss'



export default function CSSIntro() {


  const display = cssArtList.map(el => 
    <Link to={el.urlPath} key={el.name} >
      {el.name}
    </Link>
  )



  return (
    <div className='intro'>

      <h2 className='intro__welcome'>Welcome to the CSS Shop, a subsidiary of Art Gallery</h2>
      <p>Here we have the world's goofiest selection of CSS masterpieces.</p>
      <p>We're way better than SVGs. Just think of how much time it took to draw them.</p>
      <p>All of that code. They don't have easy programs like Inkscape to create these!</p>
      <p>Which carefully keycrafted work of art would you like to peruse?</p>

      <ul className='intro__contentList'>
        {display}
      </ul>

    </div>
  )
}
