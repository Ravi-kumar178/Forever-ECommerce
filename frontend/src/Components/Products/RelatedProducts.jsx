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
     productCopy = productCopy.slice(0,4);
     setFilteredProducts(productCopy);
  },[products])


  return (
    <div className='my-24'>
        <div className="text-center text-3xl py-2">
            <Title text1={"RELATED"} text2={"PRODUCTS"}/>
        </div>

        <div className="grid my-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 gap-y-6">
            {
                filteredProducts.map((product,index)=>{
                  let description = product.description.slice(0,100);
                  return(
                    <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price} description={description} subCategory={product.subCategory}/>
                  )
                })
            }
        </div>
    </div>
  )
}

export default RelatedProducts