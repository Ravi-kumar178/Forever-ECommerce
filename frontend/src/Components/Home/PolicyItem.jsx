import React from 'react'

const PolicyItem = ({image,title,desc}) => {
  return (
    <div>
       <img src={image} alt="" loading='lazy' className='w-12 mb-5 mx-auto'/>
       <p className='font-semibold'>{title}</p>
       <p className='text-gray-400'>{desc}</p>
    </div>
  )
}

export default PolicyItem