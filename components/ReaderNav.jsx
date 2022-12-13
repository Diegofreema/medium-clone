import React from 'react'
import {AiOutlineHome, AiOutlineBell} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'
import {RiArticleLine} from 'react-icons/ri'
import {BsPencilSquare} from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

const ReaderNav = () => {
  return (
    <div className='w-24 h-screen  justify-between items-center p-4 hidden xl:flex flex-col'>
    <div className="logocon">
    <Link href='/'>
    <img
    src='/m.webp'
  
    alt='logo'
    className='rounded-full object-cover w-[200px] h-[40px]'
    />
    
    </Link>
    </div>
    <div className="iconContainer flex flex-1 flex-col justify-center gap-6 text-xl text-[#787878]">
    <Link href='/'>
    <AiOutlineHome className='cursor-pointer'/>
        </Link>
    
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

export default ReaderNav