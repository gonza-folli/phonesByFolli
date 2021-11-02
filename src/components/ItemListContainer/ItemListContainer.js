// import { ItemCount } from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import phones from '../phones.json'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState(null);
    const {categoryId} = useParams()

    const phonesList = () => new Promise((resolve,reject) => {
            resolve(phones)
    })

    useEffect(() => {
        phonesList()
        .then(response => {
            if (response && categoryId) {
                let categoryFiltered = response.filter(e => e.category === categoryId)
                setProducts(categoryFiltered)
            } else {
                setTimeout(() => {
                    setProducts(response)
                }, 2000);
            }
        })
        .catch(error => console.log(error))
    }, [categoryId])

    return <section className="ItemListContainer">
            <h1 className="sectionTitle">{props.greeting}</h1>

            <div className="productList">
                {products ? products.map((producto) => 
                    <ItemList producto={producto} key={producto.id}/>
                ) : <div className="loading"></div>}
            </div>
    </section>
}