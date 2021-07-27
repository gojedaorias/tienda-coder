import React from 'react'
import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({item={}}) =>{

    console.log(item.productName)

    return (
        <div>
        <div className="detail">
            <div className="detail__productImage">
            <img src={item.image} alt="" className="detail__image" />
            </div>
            <div className="detail__info">
            <div className="detail__topInfo">
            <h1 className="detail__name">{item.name}</h1>
            <p className="detail__subtitle">{item.category}</p>
            <p className="detail__id">{item.id}</p>
            </div>
            <div className="detail__bottomInfo">
                <ItemCount initial={1} stock={item.stock}/>
            </div>
            </div>

        </div>
        </div>
    )
}

export default ItemDetail
