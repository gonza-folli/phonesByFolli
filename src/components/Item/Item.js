import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ( {producto} ) => {
    return <div className="productContainer">
        <div className="imageContainer"><img alt="phone1" className="productImg" src={producto.image} /></div>
        <h2 className="productTitle">{producto.title}</h2>
        <h4 className="productDesc">{producto.description}</h4>
        <p className="productStock">Stock disponible: {producto.remain} Unidades</p>
        <Link to={`/item/${producto.id}`}><button className="addBtn">Ver Detalles/Comprar</button></Link>
    </div>
}