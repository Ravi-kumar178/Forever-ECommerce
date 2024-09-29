import React, {  useContext, useEffect, useState } from 'react'
import Title from '../Common/Title'
import { ShopContext } from '../../Context/ShopContext'
import ProductItem from '../Common/ProductItem';


const LatestCollection = () => {

  const {products} = useContext(ShopContext);

  const[latestProducts, setLatestProducts] = useState([]);
   useEffect(()=>{
    setLatestProducts(products.slice(0,10));
   },[products]);

  return (
    <div className='my-10'>

        <div className='text-center pt-8 text-3xl'>
            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
        </div>

        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-400'>Discover our latest collection featuring timeless designs, premium materials, perfect for elevating your everyday style.</p>
        {/* rendering products */}
        <div className="py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {
            latestProducts.length > 0 && (
              latestProducts.map((product,index)=>(
                <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price}/>
              ))
            )
          }
        </div>
    </div>
  )
}

export default LatestCollection