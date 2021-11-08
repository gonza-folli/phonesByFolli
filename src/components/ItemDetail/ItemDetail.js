import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './ItemDetail.css'
import Swal from 'sweetalert2'

export const ItemDetail = ({producto}) => {

    const [cartProductState, setCartProductState] = useState(false) // Variable Flag para renderizar o desrenderizar boton del carrito
    const [count, setCount] = useState(1) //En esta variable almaceno el valor  para luego pushear al carrito (le mando al hijo por props para operar el contador)

    function changeCartProductState () {
        setCartProductState(!cartProductState)
        Swal.fire({
        title: producto.title,
        text: `La cantidad de ${count} ${producto.title} han sido agregado(s) al carrito`,
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3500
        })
    }

    useEffect( () => {
    }, [cartProductState])

    return <div className="productDetailContainer">
        <img alt="phone1" className="productDetailImg" src={producto.image} />

        <div className="productDetailInfo">
            <h1 className="productDetailTitle">{producto.title}</h1>
            <h3 className="productDetailDesc">{producto.description}</h3>
            <h4 className="productDetailDetails">{producto.details}</h4>
            <h2 className="productDetailPrice">USD {producto.price}</h2>

            {/* (Des) Renderizado de Stock y Contador */}
            {cartProductState ? null :
            <div className="productDetailNumberDiv">
                <p className="productDetailStock">Stock disponible: {producto.stock} Unidades</p>
                <ItemCount className="productDetailCounter" stock={producto.stock} initial="1" count={count} setCount={setCount}/>
            </div>
            }
            {/* (Des) Renderizado de Agregar al Carrito -- Ir al carrito */}
            {cartProductState ? 
                <button className="addDetailBtn"><Link to="/cart" >IR AL CARRITO</Link></button> :
                <button onClick={changeCartProductState} className="addDetailBtn">AGREGAR AL CARRITO</button>}
        </div>
    </div>
}