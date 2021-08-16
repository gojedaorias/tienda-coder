import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'

const Item = ({ productImg, productPrice, productNormalPrice, productId, productName, productCategory, initial, stock }) => {


    return (
            <div className="card">
                <Link to={`/detail/${productId}`}>
                    <div className="card__top">
                        <p className="card__category">{productCategory.toUpperCase()}</p>
                        <img className="card__imageItem" src={productImg} alt={productName} />
                    </div>
                    <div className="card__bottom">
                        <div className="card__header">
                            <h3 className="card__title">{productName}</h3>
                        </div>
                        <div className="card__info">
                            <p className="card__normalPrice">${productNormalPrice}</p>
                            <p className="card__price">${productPrice}</p>
                        </div>
                    </div>
                    <div className="card__ctacontainer">
                        <Link className="card__cta" to={`/detail/${productId}`}> VER DETALLES</Link>
                    </div>
                </Link>
            </div>
    )
}

export default Item
