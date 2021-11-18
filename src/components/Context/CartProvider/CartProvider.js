import { createContext, useState } from "react"
import { deleteAllPopUp, deleteItemPopUp, checkOutPopUp } from "../../Alertas/Alertas"

export const cartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cartItems , setCartItems] = useState([])
    const [total, setTotal] = useState(0) // para la funcion de totalizar el carrito

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
        deleteItemPopUp(productoEliminado)
    }

    //Funcion para Limpiar items al carrito
    const clear = (checkOut) => {
        console.log(cartItems)
        checkOut ? checkOutPopUp(checkOut) : deleteAllPopUp()
        setCartItems([])
    }

    //funcion para chequear si se encuentra o no en el carrito
    const isItemInCart = (itemId) => {
        if (cartItems.length >= 1 && cartItems.find((e) => e.id === itemId)) {
            let product = cartItems.find((e) => e.id === itemId)
            return product
            }
    }

    //funcion para chequear el remanente de stock
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