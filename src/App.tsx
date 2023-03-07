import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from './styles/themeblack'
import Game from "./pages/Game";
import Home from './pages/Home'


function App() {

  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  )
}

export default App
