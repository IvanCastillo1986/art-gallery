import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from '../NavBar'


  
test('render NavBar', () => {
    render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    )
})
test('it has a link to Home view', () => {
    const {getByText} = render(<NavBar />, {wrapper: MemoryRouter})
    expect(getByText('Code Corner')).toBeInTheDocument()
})
test('it has a link to CSS view', () => {
    const {getByText} = render(<NavBar />, {wrapper: MemoryRouter})
    expect(getByText('CSS')).toBeInTheDocument()
})
test('it has a link to SVG view', () => {
    const link = render(<NavBar />, {wrapper: MemoryRouter}).getByTestId
    expect(link('navBar__svg')).toBeInTheDocument()
})
test('it has a link to Canvas view', () => {
    const {getByText} = render(<NavBar />, {wrapper: MemoryRouter})
    expect(getByText('Canvas')).toBeInTheDocument()
})