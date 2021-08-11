import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Cart.scss'

function Cart() {

    const { cartList, saveItem, cartPrice, cartQty } = useContext(CartContext)

    console.log(cartList)
    console.log(cartPrice())
    console.log(cartQty())

    

    return (
        <>
            {cartList.length === 0 ?
                <div className="cart-empty">
                    <h3>Tu carro esta vacio</h3>
                </div>
                : <div className="cart-items">
                    {cartList.map((item) => {
                        return (
                            <div className="row" key={item.item.id}>
                                <p className="col">{item.item.productName}</p>
                                <p className="col">{item.quantity}</p>
                                <p className="col">{item.item.price}</p>
                            </div>)
                    })}

                    <div className="row">
                    <p className="totalItem">Cantidad de Productos: {cartQty()}</p>
                    <p className="totalPrice">Precio Total : ${cartPrice()}</p>
                    </div>
                </div>}
        </>
    )
}


export default Cart
