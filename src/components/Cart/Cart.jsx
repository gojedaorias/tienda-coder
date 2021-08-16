import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import './Cart.scss'

function Cart() {

    const { cartList, cartPrice, cartQty, removeItem } = useContext(CartContext)


    return (
        <div className="cart">
            {cartList.length === 0 ?
                <div className="cart__empty">
                    <h1 className="cart__title">Tu carro esta vacio :( </h1>
                    <Link className="cart__link" to="/">Vuelve a ver más productos</Link>
                </div>
                : <div className="cart__items">
                    <table className="cart__table">
                        <thead className="cart__tablehead">
                            <tr className="cart__rowhead">
                                <th className="cart__remove"></th>
                                <th className="cart__image"></th>
                                <th className="cart__product">Producto</th>
                                <th className="cart__price">Precio</th>
                                <th className="cart__cantidad">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map((item) => {
                                return (
                                    <tr className="cart__rowproduct" key={item.item.id}>
                                        <td className="cart__itemremove"><button onClick={(e) => {
                                            removeItem(item.item.id)
                                        }}>x</button></td>
                                        <td className="cart__itemimage"><img src={item.item.image} alt="imagen de producto" /></td>
                                        <td className="cart__itemproduct">{item.item.productName}</td>
                                        <td className="cart__itemprice">${item.item.price}</td>
                                        <td className="cart__itemquantity">{item.quantity}</td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                    <div className="cart__total">
                        <div className="cart__totalcontainer">
                            <p className="cart__totalItem">Cantidad de Productos</p>
                            <p className="cart__totalqty">{cartQty()} Unid.</p>
                        </div>
                        <div className="cart__totalcontainer">
                            <p className="cart__totalItem">Precio Total</p>
                            <p className="cart__totalqty">${cartPrice()}</p>
                        </div>
                        <Link className="cart__cta" to="/checkout">COMPRAR</Link>
                    </div>
                </div>}
        </div>
    )
}


export default Cart
