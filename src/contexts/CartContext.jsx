import React, { createContext, useState } from 'react'


export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])


    const saveItem = (newItem) => {
        const index = cartList.findIndex(item => newItem.item.id === item.item.id)
        if (index === -1) {
            setCartList([...cartList, newItem])
        } else {
            const newQuantity = cartList[index].quantity + newItem.quantity
            const oldList = cartList.filter(old => old.item.id !== newItem.item.id)
            setCartList([...oldList, { ...newItem, quantity: newQuantity }])
        }
    }

    const removeItem = (oldItemId) => {
        const oldList = cartList.filter(item => item.item.id !== oldItemId)
        setCartList(oldList)
    }
    const cartPrice = () => {
        return cartList.reduce((acum, valor) => acum + valor.item.price * valor.quantity, 0)
    }
    const cartQty = () => {
        return cartList.reduce((acum, valor) => acum + valor.quantity, 0)
    }
    const clearCart = () => {
        setCartList([])
    }


    return (
        <CartContext.Provider
            value={{
                cartList,
                setCartList,
                saveItem,
                removeItem,
                cartPrice,
                cartQty,
                clearCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
