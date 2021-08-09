import React, {useContext} from 'react'
import {CartContext} from '../../contexts/CartContext'

function Cart() {

    const {cartList, saveItem, cartPrice,cartQty} = useContext(CartContext)

    console.log(cartList)
    console.log(cartPrice())
    console.log(cartQty())
    
    return (
        <>
        {cartList.map(item => (
            <>
            <div key={item.item.id}>
            <p style={{color: '#fff'}}>{item.item.productName}</p>
            <p style={{color: '#fff'}}>{cartPrice()}</p>
            <p style={{color: '#fff'}}>{cartQty()}</p>
            </div>
            </>
        ))}
        </>
    
    )
}

export default Cart
