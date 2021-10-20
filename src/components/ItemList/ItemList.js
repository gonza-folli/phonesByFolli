import { ItemCount } from '../ItemCount/ItemCount'
import './ItemList.css'


export const ItemList = ( {producto} ) => {
    return <>

        <div className="productContainer">
            <img alt="phone1" className="productImg" src={producto.image} />
            <h2 className="productTitle">{producto.title}</h2>
            <h4 className="productDesc">{producto.description}</h4>
            <p className="productStock">Stock disponible: {producto.stock} Unidades</p>
            <ItemCount stock={producto.stock} initial="1" />
            <button className="addBtn">Comprar</button>
        </div>

        {/* <div className="productContainer">
            <img alt="phone1" className="productImg" src="https://www.apple.com/v/iphone/home/ba/images/overview/compare/compare_iphone_13_pro__etecge8yu8q6_large.jpg" />
            <h2 className="productTitle">iPhone 13 PRO</h2>
            <h4 className="productDesc">El iPhone en su máxima expresión</h4>
            <ItemCount stock="5" initial="1" />
            <button className="addBtn">Comprar</button>
        </div>

        <div className="productContainer">
            <img alt="phone1" className="productImg" src="https://www.apple.com/v/iphone/home/ba/images/overview/compare/compare_iphone_13__ejsyn7suyw02_large.jpg" />
            <h2 className="productTitle">iPhone 13</h2>
            <h4 className="productDesc">Una potencia extraordinaria.</h4>
            <ItemCount stock="7" initial="1" />
            <button className="addBtn">Comprar</button>
        </div>

        <div className="productContainer">
            <img alt="phone1" className="productImg" src="https://www.apple.com/v/iphone/home/ba/images/overview/compare/compare_iphone_12__edurff15kyoi_large.jpg" />
            <h2 className="productTitle">iPhone 12</h2>
            <h4 className="productDesc">Increíble como siempre.</h4>
            <ItemCount stock="3" initial="1" />
            <button className="addBtn">Comprar</button>
        </div> */}

    </>
}