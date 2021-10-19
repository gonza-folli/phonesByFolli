// import { ItemCount } from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import phones from '../phones.json'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const phonesList = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(phones)
        }, 1000);
        });
    
        phonesList
        .then(response => {
            setProducts(response)
            console.log(response)
        })
    }, [])

    return <section className="ItemListContainer">
            <h1 className="sectionTitle">{props.greeting}</h1>

            <div className="productList">
                {products?.map((producto) => 
                    <ItemList producto={producto} key={producto.id}/>
                )}
            </div>
    </section>
}