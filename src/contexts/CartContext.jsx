import React,{createContext,useState} from 'react'


export const CartContext = createContext()

const CartContextProvider=({children})=> {

    const [cartList,setCartList] = useState([])

    
    const saveItem = (newItem) => {
        console.log(newItem)
        const index = cartList.findIndex(item => newItem.item.id === item.item.id)
        console.log('este es el index',index)

        if(index === -1){
            setCartList([...cartList,newItem])
        }else{
            const newQuantity = cartList[index].quantity + newItem.quantity
            console.log('esta es la nueva cantidad', newQuantity)
            const oldList = cartList.filter(old => old.item.id !== newItem.item.id)
            console.log('esta es la lista sin el item', oldList)
            setCartList([...oldList,{...newItem,quantity:newQuantity}])
        }
    }

    const removeItem = (item) => {
        const oldList = cartList.filter(old => old.item.id !== item.item.id)
    }
    const cartPrice = () => {
        return cartList.reduce((acum,valor) => acum + valor.item.price * valor.quantity,0)
    }
    const cartQty = () => {
        return cartList.reduce((acum,valor) => acum + valor.quantity,0)
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
