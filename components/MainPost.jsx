import Image from 'next/image'
import React from 'react'
import { AiFillPlayCircle, AiOutlineTwitter } from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {GrLinkedin} from 'react-icons/gr'
import {HiOutlineLink} from 'react-icons/hi'
import {BiBookmarks} from 'react-icons/bi'
import {FiMoreHorizontal} from 'react-icons/fi'
import { urlFor } from '../sanity'
import Link from 'next/link'

const MainPost = ({post}) => {


  return (

    <Link href={`/post/${post.slug.current}`}>
    
   
    <div className='border-b border-black/30 pb-8'>
   <div className="author flex items-center space-x-2 mb-4">
   <div className='w-[40px] h-[40] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 relative'>
   <img src={urlFor(post.author.image).url()}
  className='w-[60px] object-cover'
   alt='userImage'
 
   />
   </div>
   <p className='font-semibold'>{post.author.name}</p>
   <p>{new Date(post._createdAt).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short'
   }) }</p>
   </div>
   <div className='post-detail flex items-center space-x-4 sm:space-x-16'>
  <div className="left">
  <p className='font-bold -mt-12 sm:mt-0 md:font-bold text-sm md:text-2xl'>{post.title.slice(0, 30)}...</p>
  <p className='mt-4 text-sm hidden sm:flex'>{post.description}...</p>
  </div>
  <div className="right flex-shrink-0 w-[100px] h-[100px] relative">
  <img
  src={urlFor(post.mainImage).url()}

 priority
  
  className='flex-1 w-full flex-shrink-0 object-cover'
  alt='mainImage'
  />
  </div>
  
  </div>

  <div className='mt-2 sm:mt-8 flex items-center space-x-2'>
  <p className='text-sm bg-black/30 font-thin px-2 py-1 rounded-full'>{post.categories[0].title}</p>
  <p className='text-sm text-black/50'>{post.postLength} min read</p>
  
  </div>
    
    
    </div>
    </Link>
  )
}

export default MainPost