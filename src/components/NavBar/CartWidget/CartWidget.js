import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import textImg from '../../assets/textImg.png'
import { Link } from 'react-router-dom';
import './CartWidget.css'

export const CartWidget = () => {
    return <>
    <div className="cartIconDiv">
        <Link to="/cart" >
            
        </Link>
        <FontAwesomeIcon icon={faShoppingCart} className="cartIcon"/>
            <div className="cartCounter">
                <img src={textImg} alt="globotexto" />
                <p className="cartText">1</p>
        </div> 
    </div>
    </>
}