import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState(null);
    const {categoryId} = useParams()

    function orderArray (response) {
        let responseOrdered = response.sort(function(a,b) { 
            if (a.category > b.category) {return -1}
            if (a.category < b.category) {return 1}
            return 0
        })
        return responseOrdered
    }

    useEffect(() => {
            const db = getFirestore()
            getDocs(collection(db,"products"))
            .then(snapshot => {
                let response = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
                let responseOrdered = orderArray(response) //funcion para ordenar el array
                if (responseOrdered && categoryId) {
                    let categoryFiltered = responseOrdered.filter(e => e.category === categoryId)
                    setProducts(categoryFiltered)
                } else {
                    setProducts(responseOrdered)
                }
            })
            .catch(error => console.log(error))
    }, [categoryId])


    return <section className="ItemListContainer">
            {categoryId ? <h2 className="sectionSubTitle">{`SECCIÓN ${categoryId.toUpperCase()}`}</h2> : <h1 className="sectionTitle">{props.greeting}</h1> }

            <div className="productList">
                {products ? products.map((producto) => 
                    <ItemList producto={producto} key={producto.id}/>
                ) : <div className="loading"></div>}
            </div>
    </section>
}