import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../Home'



describe('Home Page set up', () => {

    test('render Home page', () => {
      render(<Home />, {wrapper: MemoryRouter})
    })
  
    test('it has an element to display welcome message', () => {
      const message = render(<Home />, {wrapper: MemoryRouter}).getByText
      expect(message('Welcome to the Art Gallery!')).toBeInTheDocument()
    })
  
    test('it has an element to display welcome sentence', () => {
      const {getByText} = render(<Home />, {wrapper: MemoryRouter})
      expect(getByText("We're stocked with the latest in goofy masterpieces from the world's goofiest artists.")).toBeInTheDocument()
    })
    test('it has a second element to display second welcome sentence', () => {
      const {getByText} = render(<Home />, {wrapper: MemoryRouter})
      expect(getByText("Which category would you like to browse?")).toBeInTheDocument()
    })
  
    test.todo('it has a link to the CSS page')
  
    test.todo('it has a link to the SVG page')
  
  })