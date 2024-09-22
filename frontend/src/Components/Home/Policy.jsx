import React from 'react'
import { assets } from '../../assets/assets'
import PolicyItem from './PolicyItem'

const data = [
    {
        img:assets.exchange_icon,
        title:"Easy Exchange Policy",
        desc:"We offer hassle free exchange policy"
    },
    {
        img:assets.quality_icon,
        title:"Easy Exchange Policy",
        desc:"We offer hassle free exchange policy"
    },
    {
        img:assets.support_img,
        title:"Easy Exchange Policy",
        desc:"We offer hassle free exchange policy"
    }
]

const Policy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        {
            data.map((item,index)=>(
                <PolicyItem key={index} image={item.img} title={item.title} desc={item.desc}/>
            ))
        }
    </div>
  )
}

export default Policy