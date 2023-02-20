import styled from "styled-components"
import BackPlate from '../../assets/img/cardBackplate.png'

export const GameFieldMainContainer = styled.section`
  background-color: ${({ theme: { colors } }) => colors.background};
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  height: 100%;
  padding: 10px;
  width: 100%;
  & img {
    width: 100%;
  }
`

export default function GameField10() {
  return (
    <GameFieldMainContainer>
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
      <img src={BackPlate} alt="BackPlate" />
    </GameFieldMainContainer>
  )
}
