import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./components/MainPage"
import Content from "./components/Content"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
