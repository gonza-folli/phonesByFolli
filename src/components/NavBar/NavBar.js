import logo from '../assets/logoPhoneV2.svg';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

    <input type="checkbox" className="burgerMenu" id="burgerMenu" />
    <label htmlFor="burgerMenu" className="burgerMenuLabel">
            <FontAwesomeIcon icon={faBars} id="burger" className="burgerIcon"/>
    </label>
    <nav className="NavBarDiv"> 
        <ul className="NavBar">
            <li className="NavBarItem"><a className="NavBarLink" href="/#">Celulares</a></li>
            <li className="NavBarItem"><a className="NavBarLink" href="/#">Accesorios</a></li>
            <li className="NavBarItem"><a className="NavBarLink" href="/#">Soporte</a></li>
            <li className="NavBarItem"><a className="NavBarLink" href="/#">Contacto</a></li>
        </ul>
    </nav>
  </header>
}