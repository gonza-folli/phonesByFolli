import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import textImg from '../../assets/textImg.png'
import './CartWidget.css'

export const CartWidget = () => {
    return <>
    
    <div className="cartIconDiv">
        <FontAwesomeIcon icon={faShoppingCart} className="cartIcon"/>
        <div className="cartCounter">
            <img src={textImg} alt="globotexto" />
            <p>1</p>
        </div>        
    </div>
    </>
}