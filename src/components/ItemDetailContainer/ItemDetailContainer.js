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
    const {isItemInCart} = useContext(cartContext)

    useEffect( () => {
        if (isItemInCart(itemId)) {
            const product = isItemInCart(itemId)
            setItem(product)
        } else {
            const db = getFirestore()
            const docRef = doc(db, "products", itemId);
            getDoc(docRef)
            .then(snapshot => {
                const response = {...snapshot.data(), id: snapshot.id}
                    setItem(response)
                })
            .catch((err) => console.log(err));
        }
    },[itemId, isItemInCart])

    return <>
        {item ? <ItemDetail producto={item}/> : <div className="itemLoading"></div>}
    </>
}