import React,{useContext, useState} from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from "../../contexts/CartContext";

const ItemDetail = ({item= {} }) => {

  const [quantity, setQuantity] = useState(1);

  const {saveItem} = useContext(CartContext);

  const onAdd =(quantity)=> {
    setQuantity(quantity)
    saveItem({item: item,quantity: quantity})
}

 

  return (
   <div className="detailcontainer">
      <div className="detail">
        <div className="detail__productImage">
          <img src={item.image} alt="foto de producto" className="detail__image" />
        </div>
        <div className="detail__info">
          <div className="detail__topInfo">
          <p className="detail__category">{item.category}</p>
            <h1 className="detail__title">{item.productName}</h1>
            <div className="detail__pricecontainer">
            <p className="detail__normalPrice">${item.normalPrice}</p>
            <p className="detail__price">${item.price}</p>
            </div>
            <ItemCount className="detail__count" onAdd={onAdd} initial={quantity} stock={item.stock} />
            <p className="detail__description">{item.description}</p>
         
          </div>
        </div>
    </div>
   </div>
  );
};

export default ItemDetail;
