import React, { useContext, useState } from 'react'
import {assets} from "../../assets/assets"
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
import img from '../../All Images_Playette/Logo/Text Logo_Club Playette_White.png'


const Navbar = () => {

    const[visible, setVisible] = useState(false);
    const {setShowSearch , getCartCount , navigate, setToken,token, setCartItems} = useContext(ShopContext);
    
    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});

    }
  return (
    <div className=' bg-[#0e111b] border-b-2 border-b-slate-400 sm:h-[80px] px-6 flex justify-between items-center py-5 font-medium z-50 '>
        <Link to={"/"}>
          <img src={img} alt='' loading='lazy' className='w-36'/>
        </Link>

        <ul className='hidden sm:flex gap-5 text-[15px] text-gray-300'>
            <NavLink to={"/"} className='flex flex-col gap-1 items-center'>
                <p>HOME</p>
                <hr className='w-2/4  hidden border-none h-[1.5px] bg-[#F2BA52] '/>
            </NavLink>
            <NavLink to={"/collection"} className='flex uppercase flex-col gap-1 items-center'>
                <p>collection</p>
                <hr className='w-2/4 hidden border-none h-[1.5px] bg-[#F2BA52] '/>
            </NavLink>
            <NavLink to={"/about"} className='flex uppercase flex-col gap-1 items-center'>
                <p>about</p>
                <hr className='w-2/4 hidden border-none h-[1.5px] bg-[#F2BA52] '/>
            </NavLink>
            <NavLink to={"/contact"} className='flex uppercase  flex-col gap-1 items-center'>
                <p>contact</p>
                <hr className='w-2/4 hidden border-none h-[1.5px] bg-[#F2BA52] '/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} onClick={()=>setShowSearch(true)} alt='' loading='lazy' className='w-5 cursor-pointer text-gray-300' />

            <div className='group relative z-50'>
             
               <img onClick={() => token?null:navigate('/login')} src={assets.profile_icon} alt="" loading='lazy' className='w-5 cursor-pointer' />
             
               {
                token && 
             <div className=' group-hover:block hidden absolute right-0 pt-4 z-50'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#0e111b] border-2 border-[#5f6a83]  shadow-inner custom-shadow text-gray-300 rounded  z-50'>
                    <p className=' cursor-pointer hover:text-[#F2BA52]'>My Profile</p>
                    <p onClick={()=>navigate('/orders')} className=' cursor-pointer hover:text-[#F2BA52]'>Orders</p>
                    <p onClick={logout} className=' cursor-pointer hover:text-[#F2BA52]'>Log Out</p>
                </div>
             </div>
               }
            </div>
            <Link to={"/cart"} className='relative'>
                <img src={assets.cart_icon} alt="" loading='lazy' className='w-5 min-w-5' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#F2BA52] text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>

            <img onClick={()=>{setVisible(!visible)}} src={assets.menu_icon} alt="" loading='lazy' className='w-5 cursor-pointer sm:hidden block' />
        </div>

        {/* sidebar for small devices */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?"w-full":"w-0"}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} alt="" loading='lazy' className='h-4 rotate-180' />
                    <p>Back</p>
                </div>

                <NavLink onClick={()=>setVisible(false)} to={"/"} className={"py-2 pt-6 pl-4 border uppercase"}>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} to={"/collection"} className={"py-2 pl-4 pt-6 border uppercase"}>collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} to={"/about"} className={"py-2 pt-6 pl-4 border uppercase"}>about</NavLink>
                <NavLink onClick={()=>setVisible(false)} to={"/contact"} className={"py-2 pt-6 pl-4 border uppercase"}>contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar