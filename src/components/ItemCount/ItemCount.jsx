import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.scss';

const ItemCount = ({ stock = 5, initial =1, onAdd}) => {

  const [cantidad, setCantidad] = useState(initial);
  const [clickCart, setClickCart] = useState(false);

  const handleOnAdd = () => {
    if(cantidad < stock){
      setCantidad(cantidad + 1);
    }
  };

  const handleOnRemove = () => {
   if(cantidad > initial){
      setCantidad(cantidad - 1);
    }
  };
  const handleOnCart = () => {
    onAdd(cantidad)
    setClickCart(true)
  }


  return (
    <>
    {clickCart ? 
    (<div></div>)
    :(<div className="count">
      <button onClick={handleOnRemove} className="count__button">-</button>
     <input type="number" className="count__input" value={cantidad} onChange={e => handleOnAdd(e.target.value)} />
      <button className="count__button" onClick={handleOnAdd}>+</button>
    </div>)}
    
    <div className="addCart">
      {clickCart ? <Link to={`/cart`}><button className="addCart__buttonCart">Ver Carro</button></Link>
                  :
                  
                    <button 
                        className="addCart__buttonAdd"
                        onClick={handleOnCart}
                    >
                        Agregar al Carro
                    </button>}
    </div>
    </>
  )
};
export default ItemCount;
