import React from 'react'
import Title from '../Components/Common/Title'
import { assets } from '../assets/assets'
import Newsletter from '../Components/Home/Newsletter'

const Contact = () => {
  return (
    <div>
       <div className='text-center text-2xl pt-10 border-t'>
         <Title text1={'CONTACT'} text2={'US'}/>
       </div>
       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img src={assets.contact_img} loading='lazy' className='w-full md:max-w-[480px]' alt="" />
          <div className="flex flex-col justify-center items-start gap-6">
            <p className='font-semibold text-xl text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 bg-clip-text'>Our Store</p>
            <p className='text-gray-300'>54709 Willms Station <br/>Suite 350, Washington, USA</p>
            <p className='text-gray-300'>Tel: (415) 555‑0132 <br/> Email: greatstackdev@gmail.com</p>
            <b className='font-semibold text-xl text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 bg-clip-text'>CAREERS AT FOREVER</b>
            <p className='text-gray-300'>Learn more about our teams and job openings.</p>

            <button className='bg-gray-600  text-white hover:bg-gray-300 hover:text-gray-800 px-8 py-4 text-base rounded-md transition-all duration-500'>Explore Jobs</button>
          </div>
       </div>

       <Newsletter/>
    </div>
  )
}

export default Contact