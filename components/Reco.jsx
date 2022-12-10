import Image from 'next/image'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { client } from '../sanity'


const Reco = ({posts}) => {
  console.log(posts, 'rec');
  return (
    <div className='hidden xl:flex sticky top-0 flex-col wrapper h-screen min-w-[10rem] max-w-[30rem] space-y-8 flex-[1.2rem] p-[2rem]'>
    <div className='access flex items-center justify-center bg-black py-2 px-4 text-sm text-white rounded-full'>Get unlimited access</div>
    <div className='flex items-center space-x-1 h-3 p-4 border rounded-full'>
    <AiOutlineSearch/>
    <input type="text" placeholder='search' className='flex-1 border-none outline-none bg-none' />
    </div>
   
    <div className=''>
    <div className=''>Staff Picks</div>
    <div className='contentWrapper   items-center justify-between cursor-pointer my-4'>
  
   </div>
   </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const query =  `*[_type == "post" ]{
    ...,
    categories[]->{
     title
    
    
    },
    author->{
      followers,
      name,
      image,
    }
      }`;
  const posts = await client.fetch(query);


  return {
    props: {
      posts,
  
    }
  }

    }
export default Reco
