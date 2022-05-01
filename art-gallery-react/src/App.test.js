import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home'
import CSS from './components/CSS'


test('render App component', () => {
  render(<App />, {wrapper: MemoryRouter})
})

test('it renders the Home page', () => {
  render(<Home />, {wrapper: MemoryRouter})
})

test('it renders the CSS page', () => {
  render(<CSS />)
})

