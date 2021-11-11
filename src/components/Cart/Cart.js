import { useContext, useEffect } from "react"
import { cartContext } from "../Context/CartProvider/CartProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Cart.css'


export const Cart = () => {

    const {cartItems, removeItem, clear, total, totalCart} = useContext(cartContext)

    useEffect( () => {
        totalCart(cartItems)
    }, [cartItems, totalCart])

    return <section className="cart">
    <h1>Items en el carrito listos para Checkout</h1>
    {cartItems.length > 0 ? 
        <div className="cartHeader">
        <div className="trashDiv">
            <FontAwesomeIcon onClick={() => clear()} className="trashAllIcon" icon={faTrash}></FontAwesomeIcon>
        </div>
        <h3>EL TOTAL ES DE: {total} USD</h3>
        </div> : 
        <div className="cartHeaderEmpty">
            <p>Upsss... No se Encontraron Productos</p>
            <h3 ><Link className="rootLink" to="./">Start Shopping NOW! </Link></h3>
        </div> }
    

    {cartItems.map( (item) => 
        <div className="productCartContainer" key={item.id}>
            <div className="productCartImgDiv"><img className="productCartImg" alt="imagenItem"src={item.image}/></div>
            <div className="productCartInfo">
                <h2>{item.title}</h2> 
                <h3>Cantidad: {item.quantity} Unidad(es)</h3>
                <h3>Precio por Unidad: USD {item.price}</h3>
                <h3>Precio TOTAL: USD {item.price*item.quantity}</h3>
            </div>
            <button className="removeCartBtn"><FontAwesomeIcon onClick={() => removeItem(item.id)} className="trashIcon" icon={faTrash}></FontAwesomeIcon></button>
        </div>
    )}

    </section>
}