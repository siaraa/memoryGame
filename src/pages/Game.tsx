import { useState } from "react"
import styled from "styled-components"
import DefaultPicture6 from '../assets/img/defaultPicture6.png'
import DefaultPicture8 from '../assets/img/defaultPicture8.png'
import DefaultPicture10 from '../assets/img/defaultPicture10.png'
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { ImArrowLeft2 } from "react-icons/im"
import GameField6 from "../components/gameFields/GameField6"
import GameField8 from "../components/gameFields/GameField8"
import GameField10 from "../components/gameFields/GameField10"

export const GameMainContainer = styled.div`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
  & a {
    color: ${({ theme: { colors } }) => colors.primary};
    font-family: ${({ theme: { fonts } }) => fonts.PressStart2P};
    font-size: ${({ theme: { fontSize } }) => fontSize.mid};
    margin-top: 10px;
    text-decoration: none;
    @media (max-width: 500px) {
      font-size: ${({ theme: { fontSize } }) => fontSize.small};
    }
    &:hover {
      color: ${({ theme: { colors } }) => colors.secoundary};
    }
  }
`

export const GameHeader = styled.header`
    font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
    display: flex;
    justify-content: center;
    padding: 40px 20px 20px;
    width: 100%;
    & h1 {
        color: ${({ theme: { colors } }) => colors.primary};
        font-family: ${({ theme: { fonts } }) => fonts.PressStart2P};
        font-size: clamp(28px, 5vw, 90px);
    }
`

export const GameWindow = styled.section`
  padding: 0 20px;
  width: 100%;
  max-width: 1000px;
`

export const GameChooseLevel = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  & label {
    color: ${({ theme: { colors } }) => colors.primary};
    font-family: ${({ theme: { fonts } }) => fonts.Raleway};
    font-size: ${({ theme: { fontSize } }) => fontSize.mid};
    font-weight: bold;
    padding: 8px 0;
  }
  & .inputsContainer {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    max-width: 500px;
    & div {
      display: flex;
      flex-direction: column;
    }
    & input {
      appearance: none;
      position: relative;
    }
    & input:checked~label {
      border: 2px solid white;
      color: ${({ theme: { colors } }) => colors.secoundary};
      padding: 5px;
    }
    & label {
      cursor: pointer;
      margin: 0 5px;
      text-align: center;
      @media (max-width: 500px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.small};
      }
    }
  }
  & button {
    background-color: ${({ theme: { colors } }) => colors.third};
    border-radius: 5px;
    color: ${({ theme: { colors } }) => colors.primary};
    cursor: pointer;
    font-family: ${({ theme: { fonts } }) => fonts.PressStart2P};
    font-size: ${({ theme: { fontSize } }) => fontSize.mid};
    margin: 20px 0;
    padding: 8px 10px;
    @media (max-width: 500px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.small};
      }
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.secoundary};
    }
  }
`

export const GameCards = styled.div`
  width: 100%;
`

export const DefaultField = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  & img {
    width: 100%;
    max-width: 800px;
  }
`

export default function Game() {

const [gameChooseLevelDisplay, setGameChooseLevelDisplay] = useState(true)
const [levelValue, setLevelValue] = useState(0)
const [defaulFieldDisplay, setDefaultFieldDiplay] = useState(true)

const displayGameField = () => {
  if(levelValue === 6) {
    return <GameField6 />
  }

  if(levelValue === 8) {
    return <GameField8 />
  }

  if(levelValue === 10) {
    return <GameField10 />
  }
}

const startGame = () => {
  if(levelValue !== 0) {
    setDefaultFieldDiplay(false)
    setGameChooseLevelDisplay(false)
  }
}

  return (
    <GameMainContainer>
      <GameHeader><h1>MemoryGame</h1></GameHeader>
      <GameWindow>
        {gameChooseLevelDisplay ? 
        (
          <GameChooseLevel>
          <label>Choose level :</label>
          <div className='inputsContainer'>
            <div>
              <input
                type="radio"
                name="gameLevel"
                id='gameLevel_1'
                onChange={() => {
                  setLevelValue(6)
                }} />
              <label htmlFor='gameLevel_1'>6 symbols</label>
            </div>
            <div>
              <input
                type="radio"
                name="gameLevel"
                id='gameLevel_2'
                onChange={() => {
                  setLevelValue(8)
                }} />
              <label htmlFor='gameLevel_2'>8 symbols</label>
            </div>
            <div>
              <input
                type="radio"
                name="gameLevel"
                id='gameLevel_3'
                onChange={() => {
                  setLevelValue(10)
                }} />
              <label htmlFor='gameLevel_3'>10 symbols</label>
            </div>
          </div>
          <button onClick={startGame}>
            START
            </button>
        </GameChooseLevel>
        ) : null}
        <GameCards>
          {defaulFieldDisplay ? 
          ( <DefaultField>
            {levelValue !== 6 ? null : <img src={DefaultPicture6} alt="defaultPicture6" />}
            {levelValue !== 8 ? null : <img src={DefaultPicture8} alt="defaultPicture8" />}
            {levelValue !== 10 ? null : <img src={DefaultPicture10} alt="defaultPicture10" />}
            {levelValue !== 0 ? null : <img src={DefaultPicture10} alt="defaultPicture10" />}
          </DefaultField> ) : 
          displayGameField()}
        </GameCards>
      </GameWindow>
      <Link to='/'>{<ImArrowLeft2/>} Back</Link>
      <Footer />
    </GameMainContainer>
  )
}
