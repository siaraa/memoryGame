import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from './styles/themeblack'
import Game from "./pages/Game";
import Home from './pages/Home'
import HiScores from "./pages/HiScores";
import Card from './components/card/card'


function App() {

  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/hiscores" element={<HiScores />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App
