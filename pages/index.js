import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { BsBookmarks } from 'react-icons/bs';
import {  Header, MainPost, Reader, Reco } from '../components'

import { client } from '../sanity'



export default function Home({posts}) {


 
  return (

    <div >
    <Header/>

    <div className='flex'>
    
    <Reader/>
    <div className='flex flex-col p-4 sm:p-16 justify-center flex-[3] border-l border-r overflow-y-scroll scrollbar-none space-y-6'>
    
    {posts.map((post) => (
      
      <MainPost post={post} key={post._id}  />
    ))}
    
    </div>
  
    </div>
    <div className='sticky xl:hidden bottom-0 bg-white shadow-2xl p-5 pt-2 pb-2 flex items-center justify-around'>
    <Link href='/'>
    <AiFillHome className='w-5 h-5 text-black/80'/>
    </Link>
    <AiOutlineSearch className='w-5 h-5 text-black/50'/>
    <BsBookmarks className='w-5 h-5 text-black/50'/>
    <span className='rounded-full w-10 h-10 flex items-center justify-center overflow-hidden'>
    <Image
    src='/nw.jpg'
    width={50}
    height={50}
    className='rounded-full'
    alt='userImage'
    />
    </span>
    </div>
    <footer className='text-center '>
    <p className='font-semibold text-xs pb-4'>Copyright © {new Date().getFullYear()} Legacy Inc All Rights reserved</p>
    </footer>
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

  // const authorQuery = `*[_type == 'author']{

  //   _id,
  //   name,
  //   slug,
  //   bio,
  //   followers,
  //   image
  // }`;
  // const authors = await client.fetch(authorQuery);

  // const categoryQuery = `*[_type == 'category']{

  //   title
  // }`
  // const category = await client.fetch(categoryQuery);

  return {
    props: {
      posts,
  
    }
  }

}