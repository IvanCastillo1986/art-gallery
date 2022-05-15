import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CSS from '../CSS'
import CSSIntro from '../components/CSSIntro'
import Pokedex from '../../../images/css_art/pokedex/Pokedex'


describe('CSS page set up', () => {

    test('it renders the CSS page', () => {
        render(<CSS />, {wrapper: MemoryRouter})
    })
    test('it renders welcome text', () => {
        const {getByText} = render(<CSSIntro />, {wrapper: MemoryRouter})
        expect(getByText('Welcome to the CSS Shop, a subsidiary of Art Gallery')).toBeInTheDocument()
    })
    test('it has list of links to CSS drawings', () => {
        const {getByTestId} = render(<CSSIntro />, {wrapper: MemoryRouter})
        expect(getByTestId('intro__contentList')).toBeInTheDocument()
    })
    test('it has at least one link to CSS drawings', () => {
        const {getByText} = render(<CSSIntro />, {wrapper: MemoryRouter})
        expect(getByText('Pokedex')).toBeInTheDocument()
    })

    test('it has back button in CSS Art view', () => {
        const {getByText} = render(
            <CSS>
                <Pokedex />
            </CSS>,
            {wrapper: MemoryRouter}
        )
        expect(getByText('Back to CSS')).toBeInTheDocument()
    })

})