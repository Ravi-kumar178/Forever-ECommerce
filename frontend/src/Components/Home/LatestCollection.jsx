import React, { useContext } from 'react'
import Title from '../Common/Title'
import { shopContext } from '../../Context/shopContext'

const LatestCollection = () => {
    const {products} = useContext(shopContext);
    console.log(products);
  return (
    <div className='my-10'>

        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
        </div>

        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-400'>Discover our latest collection featuring timeless designs, premium materials, perfect for elevating your everyday style.</p>

    </div>
  )
}

export default LatestCollection