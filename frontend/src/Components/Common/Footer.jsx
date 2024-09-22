import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt='' loading='lazy' className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-[#595959]'>Explore our online store for the latest fashion trends and high-quality clothing. Enjoy fast shipping, hassle-free returns, and secure checkout for a seamless shopping experience. Stay connected through social media for exclusive deals, new arrivals, and style inspiration!</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600 pl-1'>
                    <Link to={"/"} className='hover:text-black hover:scale-105 transition-all ease-in-out'>Home</Link>
                    <Link to={"/about"} className='hover:text-black hover:scale-105 transition-all ease-in-out'>About us</Link>
                    <Link to={"/"} className='hover:text-black hover:scale-105 transition-all ease-in-out'>Delievery</Link>
                    <Link to={"/"} className='hover:text-black hover:scale-105 transition-all ease-in-out'>Privacy Policy</Link>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600 pl-1'>
                    <p>+91-1234567891</p>
                    <p>foreverclothing@gmail.com</p>
                </ul>
            </div>
        </div>

        {/* horizotal line */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024 © Ravi - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer