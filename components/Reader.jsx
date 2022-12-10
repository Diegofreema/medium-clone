import React from 'react'
import {AiOutlineHome, AiOutlineBell} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'
import {RiArticleLine} from 'react-icons/ri'
import {BsPencilSquare} from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

const Reader = () => {
  return (
    <div className='hidden  w-24 h-screen sticky top-0 xl:flex flex-col justify-between items-center p-4'>
    <div className="logocon">
  
    <img
    src='/SmallLogo.png'
   
    alt='logo'
    className='rounded-full w-[200px] h-[40px] object-cover'
    />
    
  
    </div>
    <div className="iconContainer flex flex-1 flex-col justify-center gap-6 text-xl text-[#787878]">
    <AiOutlineHome className='cursor-pointer'/>
    <AiOutlineBell className='cursor-pointer'/>
    <RiArticleLine className='cursor-pointer'/>
    <FiBookmark className='cursor-pointer'/>
    <div className='border-b'/>
    <BsPencilSquare className='cursor-pointer'/>
    
    </div>
    <div className="imageContainer w-[40px] h-[40px] rounded-full overflow-hidden place-items-center ">
    <img
    src='/diego.jpg'
   
    alt='diego'
    
    style={{borderRadius: '100%'}}
    className='object-cover w-[50px] h-[50px]'
    />
    </div>
    </div>
  )
}

export default Reader