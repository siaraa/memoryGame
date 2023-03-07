import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export const HomeMainContainer = styled.div`
    background-color: ${({ theme: { colors } }) => colors.background};
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 100vh;
    max-height: 100vh;
    position: relative;
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
        font-size: clamp(28px, 8vw, 180px);
    }
`

export const HomeMainContent = styled.section`
    align-content: center;
    display: flex;
    justify-content: center;
    width: 100%;
`

export const HomeMenu = styled.div`
    border: 2px solid ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { fontSize } }) => fontSize.mid};
    height: min-content;
    padding: 20px;
    width: max-content;
    & ul {
        font-family: ${({ theme: { fonts } }) => fonts.PressStart2P};
        list-style: none;
        & li {
            font-size: clamp(.5em, 2vw, 28px);
            margin: 12px 0;
            padding: 10px 0;
            & label {
                color: ${({ theme: { colors } }) => colors.third}; 
                display: block;
                font-family: ${({ theme: { fonts } }) => fonts.PressStart2P};
                font-size: 1.5em;
                position: relative;
                text-align: left;
                width: max-content;
                &:after {
                    content: '';
                    bottom: -6px;
                    border: 2px solid ${({ theme: { colors } }) => colors.third};
                    left: 0;
                    position: absolute;
                    width: 75.5%;
                }
            }
            & a {
                color: ${({ theme: { colors } }) => colors.primary};
                text-decoration: none;
            }
        }
        & li:hover {
            & a {
                color: ${({ theme: { colors } }) => colors.secoundary};
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
            <HomeMainContent>
                <HomeMenu>
                    <ul>
                        <li><label>Menu:</label></li>
                        <li><Link to='/game'>New Game</Link></li>
                        <li><Link to='https://github.com/siaraa' target='_blank'>Visite my Github</Link></li>
                    </ul>
                </HomeMenu>
            </HomeMainContent>
            <Footer />
        </HomeMainContainer>
    )
}
