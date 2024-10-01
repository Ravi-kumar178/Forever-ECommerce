import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from "../Context/ShopContext"
import Title from "../Components/Common/Title"
import { assets } from '../assets/assets';
import CartTotal from '../Components/Cart/CartTotal';
import { toast } from 'react-toastify';


const Cart = () => {

  const {products , currency, cartItems,token, updateQuantity, navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    if(products.length > 0){
      const tempData = [];

      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
     
      setCartData(tempData);
    }
  },[cartItems, products])

  const handleNavigate = () => {
    if(token){
      navigate('/place-order')
    }
    else{
      toast.error('Please login!')
      navigate('login')
    }
  }

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=>product._id===item._id);

            return(
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className="flex items-start gap-6">
                  <img src={productData.image[0]} alt="" loading='lazy' className='w-20 sm:w-40'/>
                </div>

                <div>
                  <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    
                    <input onChange={(e)=>e.target.value===''|| e.target.value==='0'?null:updateQuantity(item._id,item.size,Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                  </div>
                  
                </div>

                <img onClick={()=> updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' loading='lazy' alt="" />
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button onClick={handleNavigate} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart