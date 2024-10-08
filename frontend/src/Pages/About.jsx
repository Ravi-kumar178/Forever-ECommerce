import React from 'react'
import Title from '../Components/Common/Title'
import { assets } from '../assets/assets'
import Newsletter from '../Components/Home/Newsletter'
import img from '../All Images_Playette/All Images_Playette/Banners/Banner_Crewneck_white_with_LGBT_01.png'

const About = () => {
  return (
    <div className=''>
      <img src={img} alt="" className='max-h-[450px] lg:max-h-[600px] w-full object-cover' />
      <div className='px-8  text-2xl text-start border-t pt-12'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="px-8 flex my-10 flex-col md:flex-row gap-16">
        <img src={assets.about_img} loading='lazy' className='w-full max-w-[450px] lg:max-w-[550px] object-cover' alt="" />

        <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-300'>
           <p>Playette was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes</p>
           <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>

           <b className='text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 bg-clip-text'>OUR MISSION :</b>
           <p>Our mission at Playette is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className='text-4xl px-8 py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col px-8 md:flex-row text-sm mb-20'>
        <div className='border border-gray-600 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 bg-clip-text text-base lg:text-lg'>Quality Assurance:</p>
          <p className='text-gray-300'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border border-gray-600 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 bg-clip-text text-base lg:text-lg'>Convenience: </p>
          <p className='text-gray-300'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border border-gray-600 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 bg-clip-text text-base lg:text-lg'>Exceptional Customer Service:</p>
          <p className='text-gray-300'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <Newsletter/>

    </div>
  )
}

export default About