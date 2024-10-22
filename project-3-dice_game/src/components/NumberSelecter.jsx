import React, { useState } from 'react'
import styles, { styled } from 'styled-components'

const NumberSelecter = ({ selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    console.log(selectedNumber)
    return (
        <NumberSelectorContainer>
            <div className='flex'>
                {
                    arrNumber.map((value, i) => (
                        <Box
                            isSelected={value === selectedNumber}
                            key={i}
                            onClick={ () => setSelectedNumber(value)}>
                            {value}
                        </Box>
                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>

    )
}

export default NumberSelecter;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;

    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    place-items:center;
    display: grid;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
