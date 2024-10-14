import NavBar from '../NavBar'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
import { fetchSearch } from '../../services/fetchApi'

export default function Header() {

    const [search, setSearch] = useState('')
    const [listSearch, setListSearch] = useState('')
    const navigate = useNavigate()

    function handleInsert(event) {
        setSearch(event.target.value)
    }
    async function handleSubmit() {
        if (!search) {
            alert('vazio')
        }
        const result = await fetchSearch(search)

        setListSearch(result.results)
        console.log(result.results)
        navigate(`/search/${search}`)
    }
        

    console.log(search)
    return (

        <header className='header'>
            <Link className='marca' to='/'><h1>Versiani Eletronics</h1></Link>
            <nav className='navbar-search'>
                <input onChange={handleInsert} className="pesquisa" type="text" placeholder="ex: Computadores, Smartwatch" />
                <button onClick={handleSubmit}><i class="bi bi-search"></i></button>
            </nav>
            <NavBar />
        </header>

    )
}