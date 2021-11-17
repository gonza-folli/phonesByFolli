import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react'
import './ItemDetail.css'
import { cartContext } from '../Context/CartProvider/CartProvider';
import { addPopUp } from '../Alertas/Alertas';

export const ItemDetail = ({producto}) => {

    const {addItem, isItemInCart, isThereRemainingItems} = useContext(cartContext)

    const [count, setCount] = useState(null) //En esta variable almaceno el valor que traigo del hijo contador
    const onAdd = (cantidad) => setCount(cantidad) //funcion para setear en el valor que traigo del hijo

    useEffect( () => {
        if (count) {
            addPopUp(producto, count) //alertar sobre el producto agregado al carrito
            addItem(producto, count) //agregar item al cartContext
            setCount(null) //se vuelve a setear en null para que no entre en loop infinito
        }
    }, [count, producto, addItem])

    return <div className="productDetailContainer">
        <img alt="phone1" className="productDetailImg" src={producto.image} />

        <div className="productDetailInfo">
            <h1 className="productDetailTitle">{producto.title}</h1>
            <h3 className="productDetailDesc">{producto.description}</h3>
            <h4 className="productDetailDetails">{producto.details}</h4>
            <h2 className="productDetailPrice">USD {producto.price}</h2>

            {/* (Des) Renderizado de Stock y Contador */}
            {isItemInCart(producto.id) && isThereRemainingItems(producto.id) ? 
                <>
                    <p className="productDetailStock">Stock disponible: {producto.remain} Unidades</p>
                    <ItemCount stock={producto.remain} initial="1" onAdd={onAdd}/>
                    <button className="addDetailBtn"><Link to="/cart" >IR AL CARRITO</Link></button>
                </> 
            : 
            isItemInCart(producto.id) ?
                <>
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