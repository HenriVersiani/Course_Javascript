
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Smartphone from './pages/Smartphone'
import Technology from './pages/Technology'


function App() {

  return (
    <Routes> 
        <Route index element={<Home/>}/>
        <Route path="/smartphone" element={<Smartphone/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/product" element={<h2>Produto</h2>}/>
    </Routes>
  )

}

export default App