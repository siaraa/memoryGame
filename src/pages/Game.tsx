import { useState } from "react"
import styled from "styled-components"
import DefaultPicture6 from '../assets/img/defaultPicture6.png'
import DefaultPicture8 from '../assets/img/defaultPicture8.png'
import DefaultPicture10 from '../assets/img/defaultPicture10.png'
import Footer from "../components/Footer"


export const GameMainContainer = styled.div`
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 100%;
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
        font-size: clamp(1em, 5vw, 90px);
    }
`

export const GameWindow = styled.section`
  width: 80%;
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
    gap: 10px;
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
      padding: 5px;
    }
    & label {
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
`

export default function Game() {

  const [levelValue, setLevelValue] = useState(10)

  return (
    <GameMainContainer>
      <GameHeader><h1>MemoryGame</h1></GameHeader>
      <GameWindow>
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
          <button>START</button>
        </GameChooseLevel>
        <GameCards>

          <DefaultField>
          {levelValue !== 6 ? null : <img src={DefaultPicture6} alt="defaultPicture6" /> }
          {levelValue !== 8 ? null : <img src={DefaultPicture8} alt="defaultPicture8" />}
          {levelValue !== 10 ? null : <img src={DefaultPicture10} alt="defaultPicture10" />}
          </DefaultField>
        </GameCards>
      </GameWindow>
      <Footer />
    </GameMainContainer>
  )
}
