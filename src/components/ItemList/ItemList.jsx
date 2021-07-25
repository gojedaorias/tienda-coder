import React,{useState, useEffect} from 'react'
import Item from '../Item/Item'
import './ItemList.scss'
import {getProducts} from '../../services/getProducts'

function ItemList() {
    
    const [products, setProducts] = useState([]);

  useEffect(() => {
      getProducts()
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
  }, []);

  console.log(products);

    
    return (
        <div className="itemList">
            {products.map(product =>{
                return (
                    <Item 
                        key={product.id}
                        productName={product.name}
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
