import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./components/MainPage"
import Task1 from "./components/Task1"
import Task2 from "./components/Task2"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
