import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import './Item.css'

export const Item = ( {producto} ) => {
    return <div className="productContainer">
        <img alt="phone1" className="productImg" src={producto.image} />
        <h2 className="productTitle">{producto.title}</h2>
        <h4 className="productDesc">{producto.description}</h4>
        <p className="productStock">Stock disponible: {producto.stock} Unidades</p>
        <ItemCount stock={producto.stock} initial="1" />
        <Link to={`/item/${producto.id}`}><button className="addBtn">Comprar</button></Link>
    </div>
}