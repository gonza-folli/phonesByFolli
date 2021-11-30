import { createContext, useState } from "react"
import { deleteAllPopUp, deleteItemPopUp, checkOutPopUp } from "../../Alertas/Alertas"

export const cartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cartItems , setCartItems] = useState([])
    const [total, setTotal] = useState(0) 

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

    const removeItem = (itemId) => {
        const filtrado = cartItems.filter(e => e.id !== itemId )
        setCartItems(filtrado)
        const productoEliminado = cartItems.find(x => x.id === itemId)
        deleteItemPopUp(productoEliminado)
    }

    const clear = (data) => {
        data ? checkOutPopUp(data) : deleteAllPopUp()
        setCartItems([])
    }

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