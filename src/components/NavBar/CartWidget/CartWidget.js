import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import textImg from '../../assets/textImg.png'
import { Link } from 'react-router-dom';
import './CartWidget.css'
import { useContext } from 'react';
import { cartContext } from '../../Context/CartProvider/CartProvider';

export const CartWidget = () => {

    const {cartItems} = useContext(cartContext)

    return <>
    <div className="cartIconDiv">
        <Link to="/cart" >
            
        </Link>
        <FontAwesomeIcon icon={faShoppingCart} className="cartIcon"/>
            <div className="cartCounter">
                {cartItems.length > 0 ? <img src={textImg} alt="globotexto" /> : null}
                <p className="cartText">{cartItems.length > 0 ? cartItems.map(x => x.quantity).reduce((a,b)=>(a+b)) : null}</p>
        </div> 
    </div>
    </>
}