import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemListContainer/ItemListContainer.scss'

const ItemListContainer = ({nombre}) => (
  <div className="saludoContainer">
    <h1 className="saludoContainer__titulo">Hola <span>{nombre}</span>, Bienvenido a mi tienda</h1>
    <ItemCount/>
  </div>
);

ItemListContainer.propTypes = {};

ItemListContainer.defaultProps = {};

export default ItemListContainer;
