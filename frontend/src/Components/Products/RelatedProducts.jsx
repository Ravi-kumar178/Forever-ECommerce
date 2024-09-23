import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Title from "../Common/Title"
import ProductItem from "../Common/ProductItem"

const RelatedProducts = ({category,subCategory}) => {

  const {products} = useContext(ShopContext);
  
  const[filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    let productCopy = products.slice();
     productCopy = productCopy.filter((product)=> category===product.category);
     productCopy = productCopy.filter((product)=>subCategory===product.subCategory);
     productCopy = productCopy.slice(0,5);
     setFilteredProducts(productCopy);
  },[products])


  return (
    <div className='my-24'>
        <div className="text-center text-3xl py-2">
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                filteredProducts.map((product,index)=>(
                    <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts