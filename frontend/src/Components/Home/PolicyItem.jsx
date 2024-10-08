import React from 'react'

const PolicyItem = ({image,title,desc}) => {
  return (
    <div>
       <img src={image} alt="" loading='lazy' className='w-12 mb-5 mx-auto'/>
       <p className='pb-1 font-semibold text-center text-xl tracking-wide bg-gradient-to-r from-blue-600 via-blue-400 to-blue-50 text-transparent bg-clip-text'>{title}</p>
       <p className='text-gray-300 text-base'>{desc}</p>
    </div>
  )
}

export default PolicyItem