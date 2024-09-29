import React, { useContext, useEffect, useState } from 'react'
import Title from '../Common/Title'
import { ShopContext } from '../../Context/ShopContext'
import ProductItem from '../Common/ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
  
    const[bestSellerProducts, setBestSellerProducts] = useState([]);

    useEffect(()=>{
        const filteredProd = products.filter((product)=>(product.bestseller));
        setBestSellerProducts(filteredProd);
    },[products])
    

  return (
    <div className='my-10'>

        <div className='text-center pt-8 text-3xl'>
            <Title text1={"BEST"} text2={"SELLER"}/>
        </div>

        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-400'>Experience premium quality and timeless design with our Best Seller, crafted for comfort, style, and durability.</p>
        <div className="py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSellerProducts.length > 0 && (
                    bestSellerProducts.map((product,index)=>(
                        <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price}/>
                    ))
                )
            }
        </div>
    </div>
  )
}

export default BestSeller