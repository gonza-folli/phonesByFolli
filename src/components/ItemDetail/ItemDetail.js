import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react'
import './ItemDetail.css'
import { cartContext } from '../Context/CartProvider/CartProvider';
import { addPopUp } from '../Alertas/Alertas';

export const ItemDetail = ({producto}) => {

    const {addItem, isItemInCart, isThereRemainingItems} = useContext(cartContext)

    const [count, setCount] = useState(null)
    const onAdd = (cantidad) => setCount(cantidad)

    useEffect( () => {
        if (count) {
            addPopUp(producto, count)
            addItem(producto, count)
            setCount(null)
        }
    }, [count, producto, addItem])

    return <div className="productDetailContainer">
        <img alt="phone1" className="productDetailImg" src={producto.image} />

        <div className="productDetailInfo">
            <h1 className="productDetailTitle">{producto.title}</h1>
            <h3 className="productDetailDesc">{producto.description}</h3>
            <h4 className="productDetailDetails">{producto.details}</h4>
            <h2 className="productDetailPrice">USD {producto.price}</h2>

            {isItemInCart(producto.id) && isThereRemainingItems(producto.id) ? 
                <>
                    <p className="productDetailStock">Stock disponible: {producto.remain} Unidades</p>
                    <ItemCount stock={producto.remain} initial="1" onAdd={onAdd}/>
                    <button className="addDetailBtn"><Link to="/cart" >IR AL CARRITO</Link></button>
                </> 
            : 
            isItemInCart(producto.id) ?
                <>
                    <p className="productDetailStock">NO queda Stock Disponible</p>
                    <button className="addDetailBtn"><Link to="/cart" >IR AL CARRITO</Link></button>
                </>
            : 
                <>
                    <p className="productDetailStock">Stock disponible: {producto.stock} Unidades</p>
                    <ItemCount stock={producto.stock} initial="1" onAdd={onAdd}/>
                </>
            }
        </div>
    </div>
}