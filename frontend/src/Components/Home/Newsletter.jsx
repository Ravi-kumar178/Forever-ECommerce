import React from 'react'

const Newsletter = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='bg-gradient-to-r from-[#A6142F] via-[#FF512F] to-[#F09819]  text-transparent bg-clip-text  text-3xl font-medium'>Subscribe now & get 20% off</p>
        <p className='text-gray-300 mt-1'>Stay updated with the latest news, insights, and exclusive offers weekly!</p>
        <form onSubmit={submitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-slate-700 pl-3'>
          <input type="email" placeholder='Enter your email id' required 
           className='w-full sm:flex-1 outline-none bg-[#111521] text-gray-300 text-base'
          />
         <button type='submit' className='bg-gray-600  text-white text-base hover:bg-gray-300 hover:text-gray-800 transition-all duration-200 px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter