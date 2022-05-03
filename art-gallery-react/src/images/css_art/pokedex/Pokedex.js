import React from 'react'
import './pokedex.css'

export default function Pokedex() {
    
    return (
    <div class='PokedexPage'>

        <h1>Pokedex created with vanillaCSS</h1>

        <div class='TopBar'>
            <div class='Camera border light'>
                <div class='Glare1'></div>
                <div class='Glare2'></div>
            </div>
            <div class='LightContainer'>
                <div class='light FirstLight'></div>
                <div class='light SecondLight'></div>
                <div class='light ThirdLight'></div>
            </div>
            <div class='EmptySpace1'></div>
        </div>

        <div class='Pokedex'>
            <div class='LeftHalf'>
                <div class='Console'>
                    <div class='ScreenPlate border shadow'>
                        <div class='plateTop'>
                            <div class='screenLight'></div>
                            <div class='screenLight'></div>
                        </div>
                        <div class='Screen border'></div>
                        <div class='plateBottom'>
                            <div class='screenLight bottomLight'></div>
                            <div class='plateSpeaker'>
                                <div class='speakerDiv'></div>
                                <div class='speakerDiv'></div>
                                <div class='speakerDiv'></div>
                                <div class='speakerDiv'></div>
                            </div>
                        </div>
                    </div>
                    <div class='NESController'>
                        <div class='JoystickContainer'>
                            <div class='Joystick border shadow'></div>
                        </div>
                        <div class='ButtonHolder'>
                            <div class='ButtonPair1'>
                                <div class='Button1 pause border'></div>
                                <div class='Button2 pause border'></div>
                            </div>
                            <div class='GreenSquare border'></div>
                        </div>
                        <div class='DpadContainer'>
                            <div class='Dpad center'>
                                <div class='innerCircle'></div>
                                <div class='Dpad top'></div>
                                <div class='Dpad right'></div>
                                <div class='Dpad bottom'></div>
                                <div class='Dpad left'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='Separator'></div>
            </div>

            <div class='RightHalf'>
                <div class='EmptySpace2'></div>
                <div class='BlackBox border'></div>
                <div class='BlueBox border shadow'></div>
                <div class='ButtonPair2'>
                    <span class='Button3 pause border'></span>
                    <span class='Button4 pause border'></span>
                </div>
                <div class='BoxLightContainer'>
                    <div class='DoubleButtons border radius shadow'></div>
                    <div class='BigYellow light border'></div>
                </div>
                <div class='RectangleContainer'>
                    <div class='Rectangle R1 border radius'></div>
                    <div class='Rectangle R2 border radius'></div>
                </div>

            </div>
        </div>
    </div>
    )
}

    
    
