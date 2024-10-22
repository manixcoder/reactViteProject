import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src='/images/dices.png' alt='dice' />
      </div>
      <div className='content'>
        <h1>DiceGame</h1>
        <Button 
        onClick={toggle}
        >Play Now</Button>
      </div>
      
    </Container>
  )
}

export default StartGame;


const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  .content{
    h1{
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
const Button = styled.button`
  background: #000000;
  border-radius: 5px;
  color: white;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s ease-in;
  cursor: pointer;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: #000000;
    transition: 0.3s ease-in;
  }
`;
