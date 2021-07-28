import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.scss'
import { getProducts } from '../../services/getProducts'



const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { categodyId } = useParams()

  useEffect(() => {

    categodyId === undefined
      ? (getProducts()
        .then(resp => setProducts(resp))
        .catch(err => console.log(err)))
      : (getProducts()
        .then(resp => setProducts(resp.filter(it => it.category === categodyId)))
        .catch(err => console.log(err)))
  }, [categodyId]);
  return (
    <div className="saludoContainer">
      <h1 className="saludoContainer__titulo">Hola <span>humano</span>, Bienvenido a mi tienda</h1>
      <ItemList products={products} />
    </div>
  )
};

export default ItemListContainer;
