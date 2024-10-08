import React from 'react'
import descVideo from '../../All Images_Playette/Logo/midJourney_Logo/3404988399-preview.mp4'

const DescriptionSection = () => {
  return (
    <div className='my-10 mt-16'>
        <h1 className='sm:text-3xl text-xl text-center text-gray-300 tracking-wide'>Step Into the Spotlight: <span className='bg-gradient-to-r from-[#A6142F] via-[#FF512F] to-[#F09819]  text-transparent bg-clip-text sm:text-4xl text-2xl font-medium'>Fashion in Full Color</span></h1>
        <p className='w-3/4 mx-auto text-xs sm:text-sm md:text-base mt-2 text-gray-400 text-center'>Experience the joy of fashion with our stunning collection, perfect for every occasion, showcasing vibrant styles that enhance your beauty</p>
        
        <video muted autoPlay loop className='w-3/4 mx-auto mt-8 shadow-blue-200 shadow-[10px_5px_50px_-5px]'>
                <source src={descVideo} type='video/mp4'></source>
        </video>
    </div>
  )
}

export default DescriptionSection