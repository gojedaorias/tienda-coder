import React from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item= {} }) => {
  console.log(item.productName);

  const [cantidad, setCantidad] = React.useState(0);

  const onAdd =(count)=> {
    setCantidad(count)
}
    console.log(cantidad);

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
