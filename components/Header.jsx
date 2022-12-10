import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineBell } from 'react-icons/ai'

const Header = () => {
  return (
    <div className=' xl:hidden p-5 pb-2 sticky top-0 shadow-xl z-20 bg-white'>
    <div className='content flex items-center justify-between max-w-7xl mx-auto'>
    <div>
    <Link href='/'>
    <img
    src='/mediumLogo.png'
  
    alt='logo'
    className='w-[50px] h-[40px]'
    />
    
    </Link>
    </div>
    <div className='space-x-4 hidden sm:flex items-center'>
   
    <span className='font-semibold cursor-pointer bg-black py-2 px-4 text-white rounded-full text-sm'>Get unlimited access</span>
    <span className='border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center'>
    
    <AiOutlineBell className='w-6 h-6  text-gray-300'/>
    </span>
    </div>
    
    </div>
    </div>
  )
}

export default Header