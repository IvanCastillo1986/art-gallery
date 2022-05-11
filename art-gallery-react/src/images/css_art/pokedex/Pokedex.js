import React from 'react'
import './pokedex.scss'


export default function Pokedex() {
    
    return (
    <div className='pokedexPage'>
        <h1>Pokedex created with vanillaCSS</h1>
    
        <div className='pokedexContainer'>

            <div className='topBar'>
                <div className='camera border light'>
                    <div className='glare1'></div>
                    <div className='glare2'></div>
                </div>
                <div className='lightContainer'>
                    <div className='light firstLight'></div>
                    <div className='light secondLight'></div>
                    <div className='light thirdLight'></div>
                </div>
                <div className='emptySpace1'></div>
            </div>

            <div className='pokedex'>
                <div className='leftHalf'>
                    <div className='console'>
                        <div className='screenPlate border shadow'>
                            <div className='plateTop'>
                                <div className='screenLight'></div>
                                <div className='screenLight'></div>
                            </div>
                            <div className='screen border'></div>
                            <div className='plateBottom'>
                                <div className='bottomLight screenLight'></div>
                                <div className='plateSpeaker'>
                                    <div className='speakerDiv'></div>
                                    <div className='speakerDiv'></div>
                                    <div className='speakerDiv'></div>
                                    <div className='speakerDiv'></div>
                                </div>
                            </div>
                        </div>
                        <div className='nesController'>
                            <div className='joystickContainer'>
                                <div className='joystick border shadow'></div>
                            </div>
                            <div className='buttonHolder'>
                                <div className='buttonPair1'>
                                    <div className='button1 pause border'></div>
                                    <div className='button2 pause border'></div>
                                </div>
                                <div className='greenSquare border'></div>
                            </div>
                            <div className='dPadContainer'>
                                <div className='dPad'>
                                    <div className='innerCircle'></div>
                                    <div className='dPad top'></div>
                                    <div className='dPad right'></div>
                                    <div className='dPad bottom'></div>
                                    <div className='dPad left'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='separator'></div>
                </div>

                <div className='rightHalf'>
                    <div className='emptySpace2'></div>
                    <div className='blackBox border'></div>
                    <div className='blueBox border shadow'></div>
                    <div className='buttonPair2'>
                        <span className='button3 pause border'></span>
                        <span className='button4 pause border'></span>
                    </div>
                    <div className='boxLightContainer'>
                        <div className='doubleButtons border radius shadow'></div>
                        <div className='bigYellow light border'></div>
                    </div>
                    <div className='rectangleContainer'>
                        <div className='rectangle r1 border radius'></div>
                        <div className='rectangle r2 border radius'></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

    
    
