import './ItemListContainer.css'

export const ItemListContainer = () => {
    return <section className="ItemListContainer">
        <h1 className="sectionTitle">BIENVENIDOS A LA TIENDA DE CELULARES by FOLLI</h1>

        <div className="productList">

            <div className="productContainer">
                <img alt="phone1" className="productImg" src="https://www.apple.com/v/iphone/home/ba/images/overview/compare/compare_iphone_13_pro__etecge8yu8q6_large.jpg" />
                <h2 className="productTitle">iPhone 13 PRO</h2>
                <h4 className="productDesc">El iPhone en su máxima expresión</h4>
                <button className="addBtn">Comprar</button>
            </div>

            <div className="productContainer">
                <img alt="phone1" className="productImg" src="https://www.apple.com/v/iphone/home/ba/images/overview/compare/compare_iphone_13__ejsyn7suyw02_large.jpg" />
                <h2 className="productTitle">iPhone 13</h2>
                <h4 className="productDesc">Una potencia extraordinaria.</h4>
                <button className="addBtn">Comprar</button>
            </div>

            <div className="productContainer">
                <img alt="phone1" className="productImg" src="https://www.apple.com/v/iphone/home/ba/images/overview/compare/compare_iphone_12__edurff15kyoi_large.jpg" />
                <h2 className="productTitle">iPhone 12</h2>
                <h4 className="productDesc">Increíble como siempre.</h4>
                <button className="addBtn">Comprar</button>
            </div>

        </div>
    </section>
}