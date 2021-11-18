import { useContext, useEffect } from "react"
import { cartContext } from "../Context/CartProvider/CartProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { addDoc, collection } from '@firebase/firestore'
import './Cart.css'


export const Cart = () => {

    const {cartItems, removeItem, clear, total, totalCart} = useContext(cartContext)

    useEffect( () => {
        totalCart(cartItems)
    }, [cartItems, totalCart])

    //Funcion finalizar compra
    function checkOut () {
        const order = {
            buyer: {
                name: "Gonzalo",
                phone: 3564334501,
                email: "gonza@gonza.com"
            },
            items: cartItems,
            total: total
        }
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then((data) => clear(data.id)).catch(e => console.log(e))
    }

    return <section className="cart">
    <h1>Items en el carrito listos para Checkout</h1>
    {cartItems.length > 0 ? 
        <div className="cartHeader">
            <div className="trashDiv"><FontAwesomeIcon onClick={() =>clear()} className="trashAllIcon" icon={faTrash}></FontAwesomeIcon></div>
            <h3>EL TOTAL ES DE: {total} USD</h3>
            <form>
                Ingrese sus datos para efectuar la Compra
                <label>Nombre Completo:<input type="text" name="name" /></label>
                <label>Número de Teléfono:<input type="text" name="phone" /></label>
                <label>E-mail:<input type="text" name="email" /></label>
                <button type="submit" onClick={checkOut}>FINALIZAR COMPRA</button>
            </form> 
            
        </div>
    : 
        <div className="cartHeaderEmpty">
            <p>Upsss... No se Encontraron Productos</p>
            <h3><Link className="rootLink" to="./">Start Shopping NOW! </Link></h3>
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