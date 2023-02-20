import { useState } from "react";
import styled from "styled-components"
import BackPlate from '../../assets/img/cardBackplate.png'
import { test6 } from '../Images'
import { shuffle } from "lodash";

export const GameFieldMainContainer = styled.section`
  background-color: ${({ theme: { colors } }) => colors.background};
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  height: 100%;
  padding: 10px;
  width: 100%;
  & img {
    width: 100%;
  }
`
export const Card = styled.div`
  aspect-ratio: 1/1;
  position: relative;
  width: 100%;
  & .backPlate {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;
  }
  & .frontPlate {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  }
  & [data-hidden="true"] {
    z-index: 1;
  }
`
export const FrontCard = styled.div`
  aspect-ratio: 1/1;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  width: 100%;
  background-color: red;
  `

export default function GameField6() {

  

  const [cardsArray, setCardsArray] = useState( shuffle([...test6, ...test6]))
  
  let [firstCard, setFirstCard] = useState<any>()
  let [firstCardValue, setFirstCardValue] = useState<any>()
  let [secoundCard, setSecoundCards] = useState<any>()
  let [secoundCardValue, setSecoundCardValue] = useState<any>()
  let [moveCounter, setMoveCounter] = useState(0)
  let [pairedCards, setPairedCards] = useState<Array<any>>([])

  const checkPair = () => {
    if(firstCardValue === secoundCardValue) {
      setPairedCards(pairedCards => [...pairedCards, firstCardValue])
      setFirstCard(firstCard = undefined)
      setFirstCardValue(firstCardValue = null)
      setSecoundCards(secoundCard = null)
      setSecoundCardValue(secoundCardValue = null)
      setMoveCounter(moveCounter = 0)
    }

    if(firstCardValue !== secoundCardValue) {
      setTimeout(() => {
        firstCard.attributes['data-hidden'].value = "false"
        secoundCard.attributes['data-hidden'].value = "false"
        setMoveCounter(moveCounter = 0)
      }, 500);
      
    }
    
  }

  const getCard = (event:any) => {

    if(moveCounter === 0) {
      if(event.currentTarget.attributes['data-hidden'].value === "false") {
        setFirstCard(firstCard = event.currentTarget)
        setFirstCardValue(firstCardValue = event.currentTarget.attributes['data-value'].value)
        event.currentTarget.attributes['data-hidden'].value = "true"
        setMoveCounter(moveCounter = moveCounter + 1)   
      }
    }    

    if(moveCounter === 1) {
      if(event.currentTarget.attributes['data-hidden'].value === "false") {
        setSecoundCards(secoundCard = event.currentTarget)
        setSecoundCardValue(secoundCardValue = event.currentTarget.attributes['data-value'].value)
        event.currentTarget.attributes['data-hidden'].value = "true"
        setMoveCounter(moveCounter = moveCounter + 1)
      }
    }  

    if(moveCounter === 2) {
      checkPair()
    }
  }



  return (
    <GameFieldMainContainer>
      {cardsArray.map((card, index) => (
        <Card key={index} >
          <img className="backPlate" src={BackPlate} alt="" data-value={card.value} data-hidden={false} data-id={index} onClick={getCard}/>
          <img className="frontPlate" src={card.picture} alt="" />
        </Card>
      ))}
    
    </GameFieldMainContainer>
  )
}


