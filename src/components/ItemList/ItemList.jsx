import Item from '../Item/Item'
import './ItemList.scss'

const ItemList = ({ items }) => {

    return (
        <div className="itemList">
            {items.map(item => {
                return (
                    <Item
                        key={item.id}
                        productName={item.productName}
                        productPrice={item.price}
                        productImage={item.image}
                        stock={item.stock}
                        productId={item.id}
                        productImg={item.image}
                        productCategory={item.category}
                        productNormalPrice={item.normalPrice}
                    />
                )
            })}
        </div>
    )
}

export default ItemList
