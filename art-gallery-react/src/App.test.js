import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import NavBar from './layout/navBar/NavBar';



test('render App component', () => {
  render(<App />, {wrapper: MemoryRouter})
})

test('renders Home text', () => {
  const { getByText} = render(<App />, {wrapper: MemoryRouter})
  expect(getByText('This is a message')).toBeInTheDocument()
})

test('render NavBar component', () => {
  render(<NavBar />, {wrapper: MemoryRouter})
})