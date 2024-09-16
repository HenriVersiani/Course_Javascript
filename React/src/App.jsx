
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <Routes> 
        <Route index element={<Home/>}/>
        <Route path="/product" element={<h2>Produto</h2>}/>
    </Routes>
  )

}

export default App