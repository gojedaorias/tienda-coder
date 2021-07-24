import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemListContainer/ItemListContainer.scss'

const ItemListContainer = ({nombre}) => (
  <div className="saludoContainer">
    <h1 className="saludoContainer__titulo">Hola <span>{nombre}</span>, Bienvenido a mi tienda</h1>
    <ItemCount stock={5} initial={1} />
  </div>
);

ItemListContainer.propTypes = {};

ItemListContainer.defaultProps = {};

export default ItemListContainer;
