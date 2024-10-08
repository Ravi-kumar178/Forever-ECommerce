import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import img from '../../All Images_Playette/Logo/Text Logo_Club Playette_White.png'


const Footer = () => {
  return (
    <div className='px-8'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={img} alt='' loading='lazy' className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-400'>Explore our online store for the latest fashion trends and high-quality clothing. Enjoy fast shipping, hassle-free returns, and secure checkout for a seamless shopping experience. Stay connected through social media for exclusive deals, new arrivals, and style inspiration!</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 text-transparent bg-clip-text'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-400 pl-1'>
                    <Link to={"/"} className='hover:text-[#F2BA52] hover:scale-105 transition-all ease-in-out'>Home</Link>
                    <Link to={"/about"} className='hover:text-[#F2BA52] hover:scale-105 transition-all ease-in-out'>About us</Link>
                    <Link to={"/"} className='hover:text-[#F2BA52] hover:scale-105 transition-all ease-in-out'>Delievery</Link>
                    <Link to={"/"} className='hover:text-[#F2BA52] hover:scale-105 transition-all ease-in-out'>Privacy Policy</Link>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 text-transparent bg-clip-text'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-400 pl-1'>
                    <p>+91-1234567891</p>
                    <p>playette@gmail.com</p>
                </ul>
            </div>
        </div>

        {/* horizotal line */}
        <div>
            <hr/>
            <p className='py-5 text-base text-center bg-gradient-to-r from-[#A6142F] via-[#FF512F] to-[#F09819]  text-transparent bg-clip-text '>Copyright 2024 © Playette - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer