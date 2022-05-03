import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SVG from '../SVG'



test('render SVG page', () => {
    render(<SVG />, {wrapper: MemoryRouter})
})
