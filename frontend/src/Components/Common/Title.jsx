import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='bg-gradient-to-r from-[#A6142F] via-[#FF512F] to-[#F09819]  text-transparent bg-clip-text'>{text1} <span className=' font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gradient-to-r from-[#A6142F] via-[#FF512F] to-[#F09819] '></p>
    </div>
  )
}

export default Title