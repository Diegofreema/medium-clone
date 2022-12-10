import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import { urlFor } from '../sanity'

const Recommendations = ({post, morePost}) => {


  return (
    <div className='hidden xl:flex flex-col  wrapper h-screen min-w-[10rem] max-w-[30rem] space-y-8 flex-[1.2rem] p-[2rem] overflow-y-scroll scrollbar-none'>
    <div className='access flex items-center justify-center bg-black py-2 px-4 text-sm text-white rounded-full'>Get unlimited access</div>
    <div className='flex items-center space-x-1 h-3 p-4 border rounded-full'>
    <AiOutlineSearch/>
    <input type="text" placeholder='search' className='flex-1 border-none outline-none bg-none' />
    </div>
    <div>
    <div className='rounded-full w-[50px] h-[50px] overflow-hidden flex items-center justify-center relative'>
    <img
    src={urlFor(post.author.image).url()}
  
    alt='banner'
    className='rounded-full object-cover w-full'
    />
    </div>
    <div className='font-semibold '>{post.author.name}</div>
    <div className='text-[#787878] text-sm mb-2'>{post.author.followers}k followers</div>
    <div className='flex items-center space-x-2 '>
    <button className='bg-[#1a8917] text-white rounded-full text-sm py-2 px-3'>Follow</button>
    <button className='bg-[#1a8917] text-white rounded-full text-sm py-2 px-3'><MdMarkEmailUnread/></button>
    </div>
    </div>
    <div className=''>
    <div className='font-semibold text-sm text-black'>More from Medium</div>
    <div className='contentWrapper   items-center justify-between cursor-pointer my-4 space-y-3'>
    {morePost.map((post) => (

   
    
   <div className="author-content flex items-center space-x-8" key={post.title}>
   <div className="info space-y-1 flex-1">
   <div className="author-name-image flex items-center space-x-2">
   <div className='w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center relative'>
   <img
   src={urlFor(post.author.image).url()}
className='w-full'
   alt='banner'
   />
   </div>
   <p className='text-sm font-semibold'>{post.author.name}</p>
   </div>
   <div className="author-content">
   <p className='font-bold '>{post.title}</p></div>
   </div>
  
   </div>
   ))}
   </div>
   </div>
    </div>
  )
}




export default Recommendations

