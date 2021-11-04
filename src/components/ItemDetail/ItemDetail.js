import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import './ItemDetail.css'

export const ItemDetail = ({producto}) => {
    return <div className="productDetailContainer">
                <img alt="phone1" className="productDetailImg" src={producto.image} />
                <div className="productDetailInfo">
                    <h1 className="productDetailTitle">{producto.title}</h1>
                    <h3 className="productDetailDesc">{producto.description}</h3>
                    <h4 className="productDetailDetails">{producto.details}</h4>
                    <h2 className="productDetailPrice">USD {producto.price}</h2>
                    <p className="productDetailStock">Stock disponible: {producto.stock} Unidades</p>
                    <ItemCount className="productDetailCounter" stock={producto.stock} initial="1" />
                    <Link to="/cart">
                        <button className="addDetailBtn">AGREGAR AL CARRITO</button>
                    </Link>
                </div>
            </div>
}