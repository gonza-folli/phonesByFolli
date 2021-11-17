import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';
import { cartContext } from '../Context/CartProvider/CartProvider';
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState(null);
    const {isItemInCart} = useContext(cartContext) //Context para consumir el estado del producto

    useEffect( () => {
        if (isItemInCart(itemId)) { //chequear si ya he "comprado" este producto
            const product = isItemInCart(itemId)
            setItem(product) // renderizo el comprado
        } else {
            const db = getFirestore()
            const docRef = doc(db, "products", itemId);
            getDoc(docRef)
            .then(snapshot => {
                const response = {...snapshot.data(), id: snapshot.id}
                    setItem(response) // renderizo el original
                })
            .catch((err) => console.log(err));
        }
    },[itemId, isItemInCart])

    return <>
        {item ? <ItemDetail producto={item}/> : <div className="itemLoading"></div>}
    </>
}