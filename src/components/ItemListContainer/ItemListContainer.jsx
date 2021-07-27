import React, {useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.scss'
import {getProducts} from '../../services/getProducts'



const ItemListContainer = ({nombre}) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
    .then(resp => setProducts(resp))
    .catch(err => console.log(err))
},[]);

  return(
  <div className="saludoContainer">
    <h1 className="saludoContainer__titulo">Hola <span>{nombre}</span>, Bienvenido a mi tienda</h1>
    <ItemList products={products} />
  </div>
  )
  };


ItemListContainer.propTypes = {};

ItemListContainer.defaultProps = {};

export default ItemListContainer;
