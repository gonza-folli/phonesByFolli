import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getFirestore } from '../../firebase';
import { doc, getDoc } from '@firebase/firestore';
import './ItemDetailContainer.css'


export const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState(null);

    useEffect( () => {
        const db = getFirestore()
        const docRef = doc(db, "products", itemId);
        getDoc(docRef)
        .then(snapshot => {
            let response = {...snapshot.data(), id: snapshot.id}
            setItem(response)
        })
        .catch((err) => console.log(err));
    },[itemId])

    return <>
        {item ? <ItemDetail producto={item}/> : <div className="itemLoading"></div>}
    </>
}