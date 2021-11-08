import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import phones from '../phones.json'
import './ItemDetailContainer.css'


export const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [item, setItem] = useState(null);

    const getItem = () => 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phones);
        }, 2000);
        });


useEffect(() => {
    getItem()
    .then((res) => {
            const itemFiltered = res.find(e => e.id === parseInt(itemId))
            itemFiltered && setItem(itemFiltered)
    })
    .catch((err) => console.log(err));
}, [itemId]);


    return <>
        {item ? <ItemDetail producto={item}/> : <div className="itemLoading"></div>}
    </>
}