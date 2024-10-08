import React, { useContext, useEffect, useState } from 'react'
import Title from '../Common/Title'
import { ShopContext } from '../../Context/ShopContext'
import ProductItem from '../Common/ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
  
    const[bestSellerProducts, setBestSellerProducts] = useState([]);

    useEffect(()=>{
        const filteredProd = products.filter((product)=>(product.bestseller)).slice(0,4);
        setBestSellerProducts(filteredProd);
    },[products])
    

  return (
    <div className='my-10 '>

        <div className='flex gap-2 justify-center items-center mx-auto pt-8 '>
            <h1 className='bg-gradient-to-r from-[#A6142F] via-[#FF512F] to-[#F09819]  text-transparent bg-clip-text sm:text-4xl text-2xl font-medium'>BEST SELLERS </h1>
            <div className='bg-gradient-to-r from-[#A6142F] via-[#FF512F] to-[#F09819] w-8 h-1'></div>
        </div>

        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base mt-2 text-gray-400 text-center'>Discover our latest collection featuring timeless designs, premium materials, perfect for elevating your everyday style.</p>
        <div className="py-8 px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 gap-y-6">
            {
                bestSellerProducts.length > 0 && (
                    bestSellerProducts.map((product,index)=>{
                        let description = product.description.slice(0,100)+"...";
                        return(
                            <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price} description={description} subCategory={product.subCategory}/>
                        )
                    })
                )
            }
        </div>
    </div>
  )
}

export default BestSeller