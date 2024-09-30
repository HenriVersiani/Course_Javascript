import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

export default function Header(){

    const [search, setSearch] = useState('')
    const [oldSearch, setOldSearch] = useState('')

        function handleInsert(event){
         setOldSearch(event.target.value)
    }
    function handleSubmit(event){
        if(!oldSearch){
            alert('vazio') 
        }
        setSearch(event.target.value = oldSearch) // fiz dessa maneira pois o 'search' estava alterando seu valor toda vez
                                                  //  que eu escrevia algo novo no input. Agora ele só altera valor quando o botão é clicado.
                                                  // ps: nao consegui importar o search e ultiliza-lo pra fazer o fetch no 'fetchApi.js'.
     }                                            
    
    console.log(search)
    return(
        
        <header className='header'>
            <Link className='marca' to='/'><h1>Versiani Eletronics</h1></Link>
            <nav className='navbar-search'>
                <input onChange={handleInsert} className="pesquisa" type="text" placeholder="ex: Computadores, Smartwatch"/>
                <button onClick={handleSubmit}><i class="bi bi-search"></i></button>
            </nav>
            <NavBar/>
        </header>
        
    )
}