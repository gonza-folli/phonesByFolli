import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react'
import './ItemDetail.css'
import Swal from 'sweetalert2'
import { cartContext } from '../Context/CartProvider/CartProvider';

export const ItemDetail = ({producto}) => {

    const {addItem, isItemInCart} = useContext(cartContext)

    const [count, setCount] = useState(null) //En esta variable almaceno el valor que traigo del hijo

    //IVAN adjunto código funcionando pero no de la forma correcta porque estoy utilizando 2 botones (1 en itemdetail y otro en itemcount) cuando el boton deberia ser solo 1
    //La idea es q la app me funcione como ahora pero que se me una todo en un sólo boton
    //Abajo tenes 2 formas que lo encaré pero en ambas encontre complicaciones
    //Tambien pense q la posible solucion es usar UseEffect pero de todas las formas que probe siempre entre en loop infinito o errores
    //y una forma que lo hice andar es seteando en el UseEffect del ItemCount la funcion onAdd (osea actualizar siempre que aumento o resto) pero se ejecutaba como muchas veces paralelo
    // y eventualmente crasheaba

    // IVAN esta es la forma 1 - sólo hacer el onAdd para que se me setee el counter en el padre.. El problema de hacerlo de esta forma es que no tengo como hacer 
    // que se me ejecute el resto del código (SWAL con el counter actualizado y la funcion addItem) ya que no tendria ningun botón en este componente
    // porque solo lo tendria renderizado en el ItemCount. Incluso probe meter useEffect condicional y me loopeaba cuando llegaba a la funcion addItem
    const onAdd = (cantidad) => setCount(cantidad)

    // IVAN esta es la forma 2 - le cambie el nombre a la funcion, pero la idea de esta funcion (comente la linea 20 para q no se pise con al 16) es que al ejecutar el boton 
    // en el hijo, me setee el counter aca (eso funciona) y luego me use el counter nuevo para hacer el SWAL y ejecutar el addITEM, el problema es que el counter en este casoi
    // me queda con el valor anterior (en este caso null) y por ende no me funciona
    //Seguramente me diras q ejecute el Swal y el AddItem con el parametro "cantidad" que si aparece actualizado pero no se si sería correcto, porque para algo seteo un valor
    // en este componente y ese valor es el q quiero usar (soy un poco porfiado jaja)
    const update = (cantidad) => {
        // setCount(cantidad) 
        console.log(count) //me toma el count anterior (seteado en null)
        Swal.fire({
        title: producto.title,
        text: `La cantidad de ${count} ${producto.title} han sido agregado(s) al carrito`,
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3500
        })
        addItem(producto, count)
    }

    useEffect( () => {
    }, [isItemInCart])

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
            <button onClick={() =>update()} className="addDetailBtn">AGREGAR AL CARRITO</button>
            </>
            }

        </div>
    </div>
}