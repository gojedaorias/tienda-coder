import Item from '../Item/Item'
import './ItemList.scss'

function ItemList({products}) {

    return (
        <div className="itemList">
            {products.map(product =>{
                return (
                    <Item 
                        key={product.id}
                        productName={product.productName}
                        productPrice={product.price}
                        productImage={product.image}
                        stock={product.stock}
                        productId={product.id}
                        productImg={product.image}
                        productCategory={product.category}
                    />
                )
            })}
        </div>
    )
}

export default ItemList
