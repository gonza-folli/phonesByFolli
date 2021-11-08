import './ItemCount.css'
export const ItemCount = ( {initial, stock, count, setCount, className} ) => {

    // const [itemCount, setItemcount] = useState(Number(initial))
    const onAdd = () => {
        if (count < stock)
        setCount(count + 1)
    }
    const onRemove = () => {
        if (count > 1) 
        setCount(count - 1)
    }

    return <div className={`productQuantity ${className}`} >
        <button className={className} onClick={onRemove}>-</button>
        {count>1 ? <h1>{count}</h1> : <h1>{initial}</h1>}
        <button className={className} onClick={onAdd}>+</button>
    </div>
}