import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getProducts} from '../../services/getProducts'
import './ItemDetailContainer.scss'

function ItemDetalContainer() {
    const [item, setItem] = useState({});

  useEffect(() => {
    getProducts()
    .then(res => setItem(res))
  }, [])

  console.log(item)
  
    return (
        <div>
            <ItemDetail item={item[0]} />
        </div>
    )
}

export default ItemDetalContainer
