import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react'
import './ItemDetail.css'
import Swal from 'sweetalert2'
import { cartContext } from '../Context/CartProvider/CartProvider';
// import { getFirestore } from '../../firebase';
// import { doc, getDoc } from '@firebase/firestore';
// import { collection, getDocs } from '@firebase/firestore';

export const ItemDetail = ({producto}) => {

    const {addItem, isItemInCart} = useContext(cartContext)

    const [count, setCount] = useState(null) //En esta variable almaceno el valor que traigo del hijo

    const onAdd = (cantidad) => setCount(cantidad)

    // useEffect( () => {
    //     //traer toda la coleccion
    //     const db = getFirestore();
    //     getDocs(collection(db, "items")).then((snapshot) =>console.log(snapshot.docs.map((doc)=> doc.data())))
    // },[])

    useEffect( () => {
        if (count) {
            Swal.fire({
                title: producto.title,
                text: `La cantidad de ${count} ${producto.title} han sido agregado(s) al carrito`,
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 3500
                })
                addItem(producto, count)
                setCount(null)
        }
    }, [isItemInCart, count, producto, addItem])

    return <div className="productDetailContainer">
        <img alt="phone1" className="productDetailImg" src={producto.image} />

        <div className="productDetailInfo">
            <h1 className="productDetailTitle">{producto.title}</h1>
            <h3 className="productDetailDesc">{producto.description}</h3>
            <h4 className="productDetailDetails">{producto.details}</h4>
            <h2 className="productDetailPrice">USD {producto.price}</h2>

            {/* (Des) Renderizado de Stock y Contador */}
            {isItemInCart(producto.id) ? 
            <button className="addDetailBtn"><Link to="/cart" >IR AL CARRITO</Link></button> :
            <>
            <div className="productDetailNumberDiv">
                <p className="productDetailStock">Stock disponible: {producto.stock} Unidades</p>
                <ItemCount className="productDetailCounter" stock={producto.stock} initial="1" onAdd={onAdd}/>
            </div>
            </>
            }

        </div>
    </div>
}