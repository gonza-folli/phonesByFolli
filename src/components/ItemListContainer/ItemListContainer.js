import { collection, getDocs, getFirestore } from '@firebase/firestore'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import './ItemListContainer.css'
import { cartContext } from '../Context/CartProvider/CartProvider';


export const ItemListContainer = (props) => {

    const [products, setProducts] = useState(null);
    const {categoryId} = useParams()

    const {isItemInCart} = useContext(cartContext)

    //funcion para ordenar el array - la consumo en el useEffect
    function sortArray (array) {
        let sortedArray = array.sort(function(a,b) { 
            if (a.category > b.category) {return -1}
            if (a.category < b.category) {return 1}
            return 0
        })
        return sortedArray
    }

    useEffect(() => {
            const db = getFirestore()
            getDocs(collection(db,"products"))
            .then(snapshot => {
                const response = snapshot.docs.map(doc => {
                    const product = ({...doc.data(), id: doc.id}) //defino product agregandole el ID
                    if (isItemInCart(product.id)) { //valido si algun producto ha sido incluido en el cart
                        return isItemInCart(product.id) // si ya se encontraba, renderizo ese elemento
                    } else {
                        return product //si no se encontraba en cart, renderizo el que traigo de Firebase
                    }
                })
                const sortedResponse = sortArray(response) //funcion para ordenar el array
                if (sortedResponse && categoryId) {
                    const categoryFiltered = sortedResponse.filter(e => e.category === categoryId)
                    setProducts(categoryFiltered)
                } else {
                    setProducts(sortedResponse)
                }
            })
            .catch(error => console.log(error))
    }, [categoryId, isItemInCart])


    return <section className="ItemListContainer">
            {categoryId ? <h2 className="sectionSubTitle">{`SECCIÓN ${categoryId.toUpperCase()}`}</h2> : <h1 className="sectionTitle">{props.greeting}</h1> }

            <div className="productList">
                {products ? products.map((producto) => 
                    <ItemList producto={producto} key={producto.id}/>
                ) : <div className="loading"></div>}
            </div>
    </section>
}