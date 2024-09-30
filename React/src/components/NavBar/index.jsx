import { NavLink } from "react-router-dom";
import './navBar.css'

export default function NavBar(){
    return(
        <nav className="my-navbar">
           <NavLink to='/smartphone'>SmartPhones</NavLink> 
           <NavLink to='/appliances'>Home Appliances</NavLink>
           <NavLink to='/technology'>Technology</NavLink>  
        </nav>
    )
}