import { createContext, useEffect, useState } from "react"
import Swal from 'sweetalert2'

export const cartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cartItems , setCartItems] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    //Funcion para agregar items al carrito
    const addItem = (item, cantidad) => {
        const itemActualizado = item
        itemActualizado.quantity = cantidad
        const itemsInCart = [...cartItems, itemActualizado]
        setCartItems(itemsInCart)
    }

    //Funcion para quitar items al carrito
    const removeItem = (itemId) => {
        const filtrado = cartItems.filter((e) => e.id !== itemId )
        const productoEliminado = cartItems.find(x => x.id === itemId)
        Swal.fire({
            title: productoEliminado.title,
            text: `Se elimino del carrito el Producto ${productoEliminado.title}`,
            icon: 'error',
            confirmButtonText: 'OK',
            timer: 3000
            })
        setCartItems(filtrado)
    }

    //Funcion para Limpiar items al carrito
    const clear = () => {
        Swal.fire({
            title: 'Se vació el Carrito',
            text: `Se eliminaron todos los productos del Carrito`,
            icon: 'error',
            confirmButtonText: 'OK',
            timer: 3000
            })
        setCartItems([])
    }

    //funcion para chequear si se encuentra o no en el carrito
    const isItemInCart = (itemId) => {
        if (cartItems.length >= 1 && cartItems.find((e) => e.id === itemId)) {
            return true
            }
    }
    //funcion para sumar el total del carrito
    const totalCart = (itemsInCart) => {
        if (itemsInCart.length > 0) {
            const numeros = []
            itemsInCart.map( (x) => numeros.push(x.price*x.quantity))
            let suma= numeros.reduce((a,b) => a+b)
            setTotal(suma)
        } else {setTotal(0)}
    }

    return <cartContext.Provider value={{cartItems, addItem, removeItem, isItemInCart, clear, total, totalCart}}> 
        {children}
    </cartContext.Provider>
}