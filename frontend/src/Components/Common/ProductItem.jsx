import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import {Link} from "react-router-dom"

const ProductItem = ({id,name,image,price,description,subCategory}) => {

    const {currency} = useContext(ShopContext);
    


  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer border-2 pb-3 border-slate-700 rounded-md group hover:shadow-[10px_5px_50px_-5px] hover:scale-95 transition-transform  duration-200'>
      <div className='overflow-hidden rounded-t-md'>
         <img src={image[0]} alt="" loading='lazy' className='transition-transform duration-300 ease-in-out group-hover:scale-110' />
      </div>

      <p className='pt-3 pb-1 font-medium text-center text-xl tracking-wide bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 text-transparent bg-clip-text'>{name}</p>
      <p className='text-gray-300 text-center text-sm'>{description}</p>
      <div className='flex lg:flex-row flex-col justify-center lg:justify-between items-center text-xs lg:text-sm px-1 mt-1'>
       <p className='text-gray-300  '>Price: <span className='bg-gradient-to-r from-[#66f649] to-[#a4fb93] bg-clip-text text-transparent'>{currency} {price}</span></p>
       <p className='text-gray-300 '>Category: <span className='bg-gradient-to-r from-[#66f649] to-[#a4fb93] bg-clip-text text-transparent'>{subCategory}</span></p>
      </div>

    </Link>
  )
}

export default ProductItem