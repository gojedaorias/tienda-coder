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
    <div>
      <button onClick={onRemove} className="buttonCount">-</button>
     <input type="number" className="inputCount" value={count} onChange={e => onAdd(e.target.value)} />
      <button className="buttonCount" onClick={onAdd}>+</button>
      <p>{initial}</p>
    </div>
  )
};
export default ItemCount;
