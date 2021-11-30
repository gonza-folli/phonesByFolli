import { useContext, useEffect, useState } from "react"
import { cartContext } from "../Context/CartProvider/CartProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import emptyCart from '../assets/empty-cart.svg'
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { addDoc, collection } from '@firebase/firestore'
import './Cart.css'


export const Cart = () => {

    const {cartItems, removeItem, clear, total, totalCart} = useContext(cartContext)
    const [buttonState, setButtonState] = useState(true)
    const [formInfo, setFormInfo] = useState({
        name: "",
        phone: "",
        email: ""
    })

    useEffect( () => {
        totalCart(cartItems)
    }, [cartItems, totalCart])

    const handleChange = (event) => {
        setFormInfo({...formInfo, [event.target.name]: event.target.value})
    }

    function checkOut () {
        setButtonState(false)
        const order = {
            buyer: formInfo,
            items: cartItems,
            total: total
        }
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then((data) => clear(data)).catch(e => console.log(e))
    }

    return <section className="cart">
    {cartItems.length > 0 ? 
        <div className="cartHeader">
            <h1>Items en el carrito listos para Checkout</h1>
            <h3>EL TOTAL ES DE: {total} USD</h3>

            <form>
                Ingrese sus datos para efectuar la Compra
                <label>Nombre Completo:<input type="text" name="name" value={formInfo.name} onChange={handleChange}/></label>
                <label>Número de Teléfono:<input type="text" name="phone" value={formInfo.phone} onChange={handleChange}/></label>
                <label>E-mail:<input type="text" name="email" value={formInfo.email} onChange={handleChange}/></label>
                {buttonState ? <button className="rootLink" disabled={!(formInfo.name && formInfo.phone && formInfo.email)} type="button" onClick={checkOut}>FINALIZAR COMPRA</button> : <div className="loading"></div>}
            </form>
            <div className="trashDiv"><FontAwesomeIcon onClick={() =>clear()} className="trashAllIcon" icon={faTrash}></FontAwesomeIcon></div>
        </div>
    : 
        <div className="cartHeaderEmpty">
            <img src={emptyCart} alt="emptyCart"/>
            <h2>Upsss... No se Encontraron Productos</h2>
            <button className="rootLink"><Link to="./">GO SHOPPING NOW! </Link></button>
        </div> 
    }

    {cartItems.map( (item) => 
        <div className="productCartContainer" key={item.id}>
            <div className="productCartImgDiv"><img className="productCartImg" alt="imagenItem"src={item.image}/></div>
            <div className="productCartInfo">
                <h2><Link className="itemLink" to={`/item/${item.id}`}>{item.title}</Link></h2>
                <h4>Cantidad: {item.quantity} Unidad(es)</h4>
                <h4>Precio por Unidad: USD {item.price}</h4>
                <h4>Precio TOTAL: USD {item.price*item.quantity}</h4>
            </div>
            <button className="removeCartBtn"><FontAwesomeIcon onClick={() => removeItem(item.id)} className="trashIcon" icon={faTrash}></FontAwesomeIcon></button>
        </div>
    )}

    </section>
}