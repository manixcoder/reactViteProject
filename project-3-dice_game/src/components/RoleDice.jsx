import React, { useState } from 'react'
import styled from 'styled-components';

const RoleDice = () => {
    const [currentDice, setCurrenrDice] = useState(1);

    const generateRandomNumber = (min, max) =>{
       // console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min) ;
    };

    const roleDice=()=>{
        const randomNumber=generateRandomNumber(1,7);
        setCurrenrDice((prev)=>randomNumber);
    }

    return (
        <DiceContainer>
            <div className='dice' onClick={()=>roleDice()}>
                <img src={`/images/dice/dice_${currentDice}.png`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
`;
