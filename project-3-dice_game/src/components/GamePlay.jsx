import React, { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore';
import NumberSelecter from './NumberSelecter';
import RoleDice from './RoleDice';

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState();
    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore />
                <NumberSelecter
                    selectedNumber={selectedNumber}
                    setSelectedNumber={selectedNumber}
                />
            </div>
            <RoleDice />

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
`;
