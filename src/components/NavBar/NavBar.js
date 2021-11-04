import logo from '../assets/logoPhoneV2.svg';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { CartWidget } from './CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
    <header className="App-header">
        <div className="App-logo-div"> 
            <Link to="/"></Link>
            <img src={logo} className="App-logo" alt="logo" />  
        </div>
        <input type="checkbox" className="burgerMenu" id="burgerMenu" />
        <label htmlFor="burgerMenu" className="burgerMenuLabel">
                <FontAwesomeIcon icon={faBars} id="burger" className="burgerIcon"/>
        </label>
        <nav className="NavBarDiv"> 
            <ul className="NavBar">
                <li className="NavBarItem">
                    <Link className="NavBarLink" to="/category/phones">Celulares</Link>
                </li>
                <li className="NavBarItem">
                    <Link className="NavBarLink" to="/category/auriculares">Auriculares</Link>
                </li>
                <li className="NavBarItem">
                    <Link className="NavBarLink" to="/category/tablets">Tablets</Link>
                </li>
                <li className="NavBarItem">
                    <Link className="NavBarLink" to="/contactus">Contacto</Link>
                </li>
                <CartWidget/>
            </ul>
            
        </nav>
        
  </header>
  )
}