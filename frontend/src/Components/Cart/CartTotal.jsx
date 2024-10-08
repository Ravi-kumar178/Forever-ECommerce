import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Title from '../Common/Title';

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full text-gray-300'>
        <div className="text-2xl">
            <Title text1={'CART'} text2={'TOTALS'}/>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p className='bg-gradient-to-r from-[#66f649] to-[#a4fb93] bg-clip-text text-transparent'>{currency} {getCartAmount()}.00</p>
            </div>
            <hr className='h-[1px] border-none bg-gray-600'/>
            <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p className='bg-gradient-to-r from-[#66f649] to-[#a4fb93] bg-clip-text text-transparent'>{currency} {delivery_fee}.00</p>
            </div>
            <hr className='h-[1px] border-none bg-gray-600'/>
            <div className="flex justify-between">
                <b>Total</b>
                <b className='bg-gradient-to-r from-[#66f649] to-[#a4fb93] bg-clip-text text-transparent'>{currency}{getCartAmount() === 0?0:getCartAmount()+delivery_fee}.00</b>
            </div>
            
        </div>
    </div>
  )
}

export default CartTotal