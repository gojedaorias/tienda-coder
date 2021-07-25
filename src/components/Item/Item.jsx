import React from 'react'
import './Item.scss'
import ItemCount from '../ItemCount/ItemCount.jsx'

function Item({productImg, productPrice,productNormalPrice,productId,productName,productCategory,initial,stock}) {


    return (
        
            <div className="card">
                <div className="card__top">
                    <img className="card__imageItem" src={productImg} alt={productName} />
                </div>
                <div className="card__bottom">
                    <div className="card__header">
                        <h3 className="card__title">{productName}</h3>
                        <p className="card__subtitle">{productCategory}</p>
                        <p className="card__id">ID: {productId}</p>
                    </div>
                    <div className="card__info">
                        <p className="card__price">{productPrice}</p>
                        <p className="card__normalPrice">{productNormalPrice}</p>
                        <ItemCount initial={1} stock={stock}/>
                    </div>
                </div>
            </div>
        
    )
}

export default Item
