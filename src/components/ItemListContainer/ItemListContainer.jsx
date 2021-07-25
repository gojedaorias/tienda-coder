import React from 'react';
import ItemList from '../ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.scss'


const ItemListContainer = ({nombre}) => (
  <div className="saludoContainer">
    <h1 className="saludoContainer__titulo">Hola <span>{nombre}</span>, Bienvenido a mi tienda</h1>
    <ItemList />
  </div>
);

ItemListContainer.propTypes = {};

ItemListContainer.defaultProps = {};

export default ItemListContainer;
