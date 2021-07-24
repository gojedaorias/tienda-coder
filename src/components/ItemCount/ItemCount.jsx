import React, { useState } from 'react';
import './ItemCount.scss';

const ItemCount = ({ stock, initial}) => {

  const [count, setCount] = useState(initial);
  const [stockStatus, setStockStatus] = useState(stock);

  const onAdd = () => {
    setStockStatus (stockStatus === 0 ? 0 :stockStatus - 1);
    console.log(stockStatus);
    stockStatus <= 0 ? setCount(5) : setCount(count === 5 ? 5 : count + 1); 
    console.log(count);
  };

  const onRemove = () => {
    setStockStatus (stockStatus === 5 ? 5 :stockStatus + 1);
    console.log(stockStatus);
    stockStatus >= 5 ? setCount(1) : setCount(count === 1 ? 1 : count - 1);
    console.log(count);
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
