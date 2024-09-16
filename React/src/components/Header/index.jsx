import './style.css'

function Header(){

    return(
        <header>
            <h1 className='marca'>Casa Versiani</h1>
            <nav>
                <input className="pesquisa" type="text" placeholder="ex: Computadores, Smartwatch"/>
                <img className='lupa' src="" alt="logo" />
            </nav>
        </header>
    )
}

export default Header