import React, { useState } from 'react';
import styled from 'styled-components';
import FMON from './FMON.js';
import Olfactomotor from './Olfactomotor.js';
import Ephys from './Ephys.js';

const ResearchButtons = () => {
    const theme = {
        black: {
            default: '#1D1D1D',
            hover: '#6E716D',
            click: '#464646'
        }
    };

    //Button Styling
    const Button = styled.button`
        background-color: ${props => theme[props.theme].default};
        color:white;
        padding:5px;
        border-radius:6px;
        border-color:${props => theme[props.theme].default};
        font-size:15px;
        @box-shadow: 2px 2px lightgray;
        cursor:pointer; 
        margin-left:5px;
        margin-right:5px;
        margin-bottom:10px;
        transition: ease 350ms;
        opacity:0.65;
        &:hover {
            opacity:.85;
            background-color: ${props => theme[props.theme].hover};
            border-color:${props => theme[props.theme].hover};
        }
        &:active{
            background-color: ${props => theme[props.theme].click};
                }`

    //Button Names
    const types = ['FMON','Olfactomotor','Ephys'];

    //More Styling
    Button.defaultProps = {
        theme: 'black'
     };

    const ButtonToggle = styled(Button)`
    
    ${({active}) => 
    active &&
    ` opacity: 1;
       ` }
   `;

    //This selects the button on click
    function ToggleGroup() {
        const [active, setActive] = useState(types[0]);

        //This changes the displayed content with button press
        function Togglecontent() {
            if (active === 'Ephys') {
                return (
                    <div class="buttonfade">
                        <Ephys/>
                    </div>
                )
            }
            else if (active === 'FMON') {
                return (
                    <div class="buttonfade">
                        <FMON/>
                    </div>
                )
            }
            else if (active === 'Olfactomotor'){
                return (
                    <div class="buttonfade">
                        <Olfactomotor/>
                    </div>
                )
            }
        };

        return (  
        <div>
            {types.map(type => (
                <ButtonToggle
                active={active === type}
                onClick={() => setActive(type)}
                >
                    {type}
                </ButtonToggle>
            ))}
            <br/><br/>
                <Togglecontent/>
        </div>
        )};

    return(
        <>
            <div>
                <br/>
                <ToggleGroup/>
            </div>
        </>
    );
};
export default ResearchButtons