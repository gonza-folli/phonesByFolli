import logo from '../assets/logoPhoneV2.svg';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { CartWidget } from './CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
    <header className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>

        <input type="checkbox" className="burgerMenu" id="burgerMenu" />
        <label htmlFor="burgerMenu" className="burgerMenuLabel">
                <FontAwesomeIcon icon={faBars} id="burger" className="burgerIcon"/>
        </label>
        <nav className="NavBarDiv"> 
            <ul className="NavBar">
                <li className="NavBarItem">
                    <Link className="NavBarLink" to="/category/phones">Celulares</Link>
                    {/* <a className="NavBarLink" href="/#">Accesorios</a> */}
                </li>
                <li className="NavBarItem">
                    <Link className="NavBarLink" to="/category/airpods">Accesorios</Link>
                    {/* <a className="NavBarLink" href="/#">Accesorios</a> */}
                </li>
                <li className="NavBarItem"><a className="NavBarLink" href="/#">Soporte</a></li>
                <li className="NavBarItem"><a className="NavBarLink" href="/#">Contacto</a></li>
                <CartWidget/>
            </ul>
            
        </nav>
        
  </header>
  )
}