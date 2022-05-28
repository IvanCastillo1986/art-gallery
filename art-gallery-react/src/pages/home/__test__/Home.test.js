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
      expect(message('Welcome to Code Canvas Corner!')).toBeInTheDocument()
    })
  
    test('it has an element to display welcome sentence', () => {
      const {getByText} = render(<Home />, {wrapper: MemoryRouter})
      expect(getByText("We're stocked with the latest in goofy masterpieces from the world's goofiest artists.")).toBeInTheDocument()
    })
    test('it has an element to prompt navigation to rest of site', () => {
      const {getByText} = render(<Home />, {wrapper: MemoryRouter})
      expect(getByText("Which category would you like to browse?")).toBeInTheDocument()
    })
    test('it hands down a props message', () => {
      const {getByText} = render(<Home about={'Our site focuses on bringing electronic art made with code to viewers'} />, {wrapper: MemoryRouter})
      expect(getByText('Our site focuses on bringing electronic art made with code to viewers')).toBeInTheDocument()
    })
  
    // FINISH THIS TEST WHEN READY TO TEST LINKS IN ROUTER
    // test('it has a link to the CSS page, which takes us there when clicked', () => {
    //   const {getByText} = render(<Home />, {wrapper: MemoryRouter})
    //   expect(getByText('CSS')).toBeInTheDocument()
    //   userEvent.click(getByText('CSS'))
    // })
  

    test.todo('it has a link to the SVG page')
  
  })