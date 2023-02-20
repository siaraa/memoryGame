import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from './styles/themeblack'
import Game from "./pages/Game";
import Home from './pages/Home'
import HiScores from "./pages/HiScores";


function App() {

  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/hiscores" element={<HiScores />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App
