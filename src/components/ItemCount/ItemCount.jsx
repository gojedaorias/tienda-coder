import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.scss';

const ItemCount = ({ stock = 5, initial =1, onAdd}) => {

  const [quantity, setQuantity] = useState(initial);
  const [clickCart, setClickCart] = useState(false);

  const handleOnAdd = () => {
    if(quantity < stock){
      setQuantity(quantity + 1);
    }
  };

  const handleOnRemove = () => {
   if(quantity > initial){
      setQuantity(quantity - 1);
    }
  };
  const handleOnCart = () => {
    onAdd(quantity)
    setClickCart(true)
  }


  return (
    <>
   <div className="itemCount">
   {clickCart ? 
    (<div></div>)
    :(<div className="count">
   <div className="count__buttoncontainer">
   <button className="count__button" onClick={handleOnAdd}>+</button>
    <button onClick={handleOnRemove} className="count__button">-</button>
   </div>
    <input type="number" className="count__input" value={quantity} onChange={e => handleOnAdd(e.target.value)} />
    </div>)}
    <div className="addCart">
      {clickCart ? <Link to={`/cart`}><button className="addCart__buttonCart">Go Cart</button></Link>
                  :
                  
                    <button 
                        className="addCart__buttonAdd"
                        onClick={handleOnCart}
                    >
                        Add Cart
                    </button>}
    </div>
   </div>
    </>
  )
};
export default ItemCount;
