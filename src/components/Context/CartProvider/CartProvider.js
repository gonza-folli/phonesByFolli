import { createContext, useState, useEffect } from "react"
import Swal from 'sweetalert2'

export const cartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cartItems , setCartItems] = useState([])
    const [total, setTotal] = useState(0) // para la funcion de totalizar el carrito

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    //Funcion para agregar items al carrito
    const addItem = (item, cantidad) => {
        const product = isItemInCart(item.id)
        if (product) {
            product.quantity = product.quantity+cantidad
            product.remain = product.stock-product.quantity
            let itemsInCart = cartItems.splice(0)
            setCartItems(itemsInCart)
        } else {
            const itemActualizado = item
            itemActualizado.quantity = cantidad
            itemActualizado.remain = itemActualizado.stock-itemActualizado.quantity
            const itemsInCart = [...cartItems, itemActualizado]
            setCartItems(itemsInCart) 
        }
    }

    //Funcion para quitar items al carrito
    const removeItem = (itemId) => {
        const filtrado = cartItems.filter(e => e.id !== itemId )
        setCartItems(filtrado)
        const productoEliminado = cartItems.find(x => x.id === itemId)
        productoEliminado.remain = productoEliminado.stock //seteo valores default
        productoEliminado.quantity = 0 //seteo valores default
        console.log(productoEliminado)
        Swal.fire({
            title: productoEliminado.title,
            text: `Se elimino del carrito el Producto ${productoEliminado.title}`,
            icon: 'error',
            confirmButtonText: 'OK',
            timer: 3000
            })
    }

    //Funcion para Limpiar items al carrito
    const clear = () => {
        console.log(cartItems)
        cartItems.map( x => {
                x.remain = x.stock
                x.quantity = 0
                return x
        })
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
            let product = cartItems.find((e) => e.id === itemId)
            return product
            }
    }

    const isThereRemainingItems = (itemId) => {
        const product = isItemInCart(itemId)
        if (product) {
            return product.remain
        } else return false
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

    return <cartContext.Provider value={{cartItems, addItem, removeItem, isItemInCart, isThereRemainingItems, clear, total, totalCart}}> 
        {children}
    </cartContext.Provider>
}