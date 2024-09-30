
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Smartphone from './pages/Smartphone'
import Technology from './pages/Technology'
import Appliances from './pages/Appliances'
import NotFound from './pages/NotFound'


function App() {

  return (
    <Routes> 
        <Route index element={<Home/>}/>
        <Route path="/smartphone" element={<Smartphone/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="appliances" element={<Appliances/>}/>
        <Route path="/product" element={<h2>Produto</h2>}/>

        <Route path='/*' element={<NotFound/>}/>
    </Routes>
  )

}

export default App