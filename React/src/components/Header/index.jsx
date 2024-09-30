import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import './style.css'

function Header(){

    return(
        
        <header className='header'>
            <Link className='marca' to='/'><h1>Versiani Eletronics</h1></Link>
            <nav className='navbar-search'>
                <input className="pesquisa" type="text" placeholder="ex: Computadores, Smartwatch"/>
                <i class="bi bi-search"></i>
            </nav>
            <NavBar/>
        </header>
        
    )
}

export default Header