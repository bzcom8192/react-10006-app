import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Bmi from './views/Bmi'
import BMR from './views/BMR'
import Car from './views/Car'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/bmr" element={<BMR />} />
        <Route path="/carinstallment" element={<Car />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
