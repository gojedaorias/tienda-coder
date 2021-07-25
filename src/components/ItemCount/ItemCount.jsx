import React, { useState } from 'react';
import './ItemCount.scss';

const ItemCount = ({ stock, initial}) => {

  const [count, setCount] = useState(initial);
  const [stockStatus, setStockStatus] = useState(stock);

  const onAdd = () => {
    setStockStatus (stockStatus === 0 ? 0 :stockStatus - 1);
    stockStatus <= 0 ? setCount(stock) : setCount(count === stock ? stock : count + 1); 
  };

  const onRemove = () => {
    setStockStatus (stockStatus === stock ? stock :stockStatus + 1);
    stockStatus >= stock ? setCount(1) : setCount(count === 1 ? 1 : count - 1);
  };

  return (
    <>
    <div className="count">
      <button onClick={onRemove} className="count__button">-</button>
     <input type="number" className="count__input" value={count} onChange={e => onAdd(e.target.value)} />
      <button className="count__button" onClick={onAdd}>+</button>
    </div>
    <div className="addCart">
      <button className="addCart__button">Agregar al Carro</button>
    </div>
    </>
  )
};
export default ItemCount;
