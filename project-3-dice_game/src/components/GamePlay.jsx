import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore';
import NumberSelecter from './NumberSelecter';
import RoleDice from './RoleDice';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrenrDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        // console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrenrDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    }



    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score} />
                <NumberSelecter
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />

            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={()=>setShowRules( (prev) => !prev)}>{showRules ? "Hide" : "Show" } Rules</Button>
            </div>
            {showRules && <Rules />}


        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.main`
padding-top:70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
    }
`;
