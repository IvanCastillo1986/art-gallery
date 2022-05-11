import { render } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
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
    test('it hands down a props message', () => {
      const {getByText} = render(<Home message="This is a message" />, {wrapper: MemoryRouter})
      expect(getByText('This is a message')).toBeInTheDocument()
    })
  
    test('it has a link to the CSS page, which takes us there when clicked', () => {
      const {getByText} = render(<Home />, {wrapper: MemoryRouter})
      expect(getByText('CSS')).toBeInTheDocument()
      userEvent.click(getByText('CSS'))
      // still not finished with this test
    })
  

    test.todo('it has a link to the SVG page')
  
  })