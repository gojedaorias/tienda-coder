import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getProducts} from '../../services/getProducts'
import './ItemDetailContainer.scss'
import { useParams } from 'react-router-dom';

function ItemDetalContainer() {
    const [item, setItem] = useState({});
    const {id} = useParams()

  useEffect(() => {
    getProducts()
    .then(res => setItem(res.filter(i=> String(i.id) === id)[0]))
  }, [id])

  console.log(id, item.id)
  
    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetalContainer
