import { useState } from 'react'
import './ItemCount.css'
export const ItemCount = ( props ) => {

    const [itemCount, setItemcount] = useState(Number(props.initial))
    const onAdd = () => {
        if (itemCount < props.stock)
        setItemcount(itemCount + 1)
    }
    const onRemove = () => {
        if (itemCount > 1) 
        setItemcount(itemCount - 1)
    }
    return <div className="productQuantity">
        <button onClick={onRemove}>-</button>
        <h1>{itemCount}</h1>
        <button onClick={onAdd}>+</button>
    </div>
}