import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='  bg-[#fcc017] border-y border-black'>
    
    <div className='space-y-4 flex items-center justify-between max-w-7xl   p-5 mx-auto'>
    <div className=''>
    
    <h1 className='max-w-xl md:text-5xl mb-3 text-4xl'>Stay Curious.</h1>
    <h3 className='font-semibold md:text-2xl text-xl '>Discover stories, thinking, and expertise from writers on any topic.</h3>
    <span className='bg-black inline-block text-white py-2 px-4 rounded-full mt-8'>Start Reading</span>
    </div>
   <img
   className='hidden sm:flex'
   src='/banner.png'
   width={300}
   height={300}
   alt='banner'
   />
    </div>
    </div>
  )
}

export default Banner