import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.scss'

import { getFirestore } from '../../services/getFirebase'



const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    let db = getFirestore()
    let itemCollection = db.collection('items')
    let query = categoryId ? itemCollection.where('category', '==', categoryId) : itemCollection

    query.get()
      .then(resp => {
        resp.size === 0
          ? console.log('no tenemos resultados')
          : setItems(resp.docs.map(item => ({ id: item.id, ...item.data() })))

      })
  }, [categoryId]);


  return (
    <div className="saludoContainer">
      <h1 className="saludoContainer__titulo">Lo mejor de <span>Adidas</span> <br /> a un mejor precio</h1>
      <ItemList items={items} />
    </div>
  )
};

export default ItemListContainer;
