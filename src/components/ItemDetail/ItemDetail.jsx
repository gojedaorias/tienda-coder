import React,{useContext, useState} from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from "../../contexts/CartContext";

const ItemDetail = ({item= {} }) => {
  console.log(item.productName);

  const [quantity, setQuantity] = useState(0);

  const {cartList,saveItem} = useContext(CartContext);

  const onAdd =(quantity)=> {
    setQuantity(quantity)
    saveItem({item: item,quantity: quantity})
}

 

  return (
    <div className="detailContainer">
      <div className="detail">
        <div className="detail__productImage">
          <img src={item.image} alt="" className="detail__image" />
        </div>
        <div className="detail__info">
          <div className="detail__topInfo">
            <h1 className="detail__name">{item.productName}</h1>
            <p className="detail__subtitle">{item.category}</p>
            <p className="detail__id">{item.id}</p>
            <p className="detail__description">{item.description}</p>
          </div>
          <div className="detail__bottomInfo">
            <ItemCount className="detail__count" onAdd={onAdd} initial={1} stock={item.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
