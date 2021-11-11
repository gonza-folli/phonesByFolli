import { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ( {initial, stock, onAdd, className} ) => {

    const [itemCount, setItemcount] = useState(Number(initial))

    const onSuma = () => {
        if (itemCount < stock)
        setItemcount(itemCount + 1)
    }
    const onRemove = () => {
        if (itemCount > 1) 
        setItemcount(itemCount - 1)
    }

    return <>
        <div className={`productQuantity ${className}`} >
            <button className={className} onClick={onRemove}>-</button>
            {itemCount>1 ? <h1>{itemCount}</h1> : <h1>{initial}</h1>}
            <button className={className} onClick={onSuma}>+</button>
        </div>
        <button onClick={() =>onAdd(itemCount)} className="addDetailBtn">AGREGAR AL CARRITO</button>
    </>
}