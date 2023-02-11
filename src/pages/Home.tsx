import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeMainContainer = styled.div`
    align-items: center;
    background-color: ${({ theme: { colors } }) => colors.background};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
    width: 100%;
`

export const HomeHeader = styled.header`
    font-size: ${({ theme: { fontSize } }) => fontSize.xlarge};
    display: flex;
    justify-content: center;
    padding: 60px 20px 20px;
    width: 100%;
    & h1 {
        color: ${({ theme: { colors } }) => colors.primary};
        font-family: ${({ theme: { fonts } }) => fonts.PressStart2P};
        font-size: clamp(1em, 8vw, 180px);
    }
`

export const HomeMenu = styled.section`
    border: 2px solid ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { fontSize } }) => fontSize.mid};
    padding: 20px;
    position: relative;
    width: max-content;
    & label {
        color: ${({ theme: { colors } }) => colors.secoundary}; 
        display: block;
        font-family: ${({ theme: { fonts } }) => fonts.PressStart2P};
        font-size: 2em;
        position: absolute;
        text-align: left;
        top: -1.5em;
        width: 100%;
    }
    & ul {
        font-family: ${({ theme: { fonts } }) => fonts.PressStart2P};
        list-style: none;
        & li {
            font-size: clamp(.5em, 2vw, 28px);
            margin: 12px 0;
            padding: 10px 0;
            &:last-of-type {
                margin-top: 24px;
            }
            & a {
                color: ${({ theme: { colors } }) => colors.primary};
                text-decoration: none;
            }
        }
    }
`

export default function Home() {
    return (
        <HomeMainContainer>
            <HomeHeader>
                <h1>MemoryGame</h1>
            </HomeHeader>
            <HomeMenu>
                <label>Menu</label>
                <ul>
                    <li><Link to='/game'>New Game</Link></li>
                    <li><Link to='/hiscores'>HiScores</Link></li>
                    <li><Link to='https://github.com/siaraa' target='_blank'>Visite my Github</Link></li>
                </ul>
            </HomeMenu>
        </HomeMainContainer>
    )
}
