import React, { useState } from 'react'
import{ Header, ReaderNav, Recommendations} from '../../components'
import Image from 'next/image'
import { AiFillPlayCircle, AiOutlineTwitter, AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import {FaFacebook, FaTimes} from 'react-icons/fa'
import {GrLinkedin} from 'react-icons/gr'
import {HiOutlineLink} from 'react-icons/hi'
import {BiBookmarks} from 'react-icons/bi'
import {FiMoreHorizontal} from 'react-icons/fi'
import { client } from '../../sanity'
import { urlFor } from '../../sanity'
import Link from 'next/link'
import PortableText from 'react-portable-text'
import { XMarkIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import {motion,  AnimatePresence, Variants} from 'framer-motion'
import moment from 'moment';
import { useForm } from "react-hook-form";

const Post = ({post, morePost}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false)
  console.log(post.comments);
  const Comments = () => (
   post.comments.map((comment) => comment.comment.length)
  )
  const onSubmit = async(data) => {
   
    await fetch('/api/createComment', {
      method: 'Post',
      body: JSON.stringify(data),
    }).then(() => {
      console.log(data);
      setSubmitted(true)
    }).catch((err) => {
      console.log(err);
      setSubmitted(false)
    })
   

  } 

  const [showNav, setShowNav] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
 

  const switchInput = () => {
    setShowInput(true)
  }


  const showNavFunction = () => {
    setShowNav(!showNav)
  }
  const hideNav = () => {
    setShowNav(false)
  }
  const variants = {
    open: {  transition: {duration: 0.2}, display: 'none'},
    closed: {  transition: {duration: 0.2}, display: 'flex' },
  }
  const variant = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
    
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className='relative overflow-x-hidden'>
    <Header/>
    <div className='flex'>
    <ReaderNav/>

    <div className='flex items-center justify-center flex-[3] border-l border-r'>
    <div className='content h-screen overflow-scroll scrollbar-none scrollbar-thumb-gray-400 scrollbar-track-gray-100 p-4 sm:p-8 flex-1'>
    <div className="headerContainer flex flex-col sm:flex-row space-y-4 justify-between sm:items-center items-">
    <div className="authorContainer flex items-center space-x-2">
    <div className="authorProfileImage flex items-center justify-center w-[40px] h-[40px] overflow-hidden rounded-full relative">
    <Image 
    src={urlFor(post.author.image).url()}
    layout="fill" objectFit="cover"
   priority={true}

    alt='diego'
    />
    </div>
    <div className='name-date'>
    <div className='font-semibold'>{post.author.name}</div>
    <div className='flex items-center space-x-2'>
    <span className='flex items-center text-sm text-black/70'>{new Date(post._createdAt).toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })}  {post.postLength} min read -</span>
    
    </div>
    </div>
    </div>


    <div className="authorSocial flex space-x-2  ">
    <AiOutlineTwitter className='cursor-pointer text-gray-500'/>
    <FaFacebook className='cursor-pointer text-gray-500'/>
    <GrLinkedin className='cursor-pointer text-gray-500'/>
    <HiOutlineLink className='cursor-pointer text-gray-500'/>
    <BiBookmarks className='cursor-pointer text-gray-500'/>
    <FiMoreHorizontal className='cursor-pointer text-gray-500'/>

    </div>
    </div>
    <div className="articleMainContainer flex flex-col gap-4 mt-4">
    <div className="bannerContainer h-72 w-full grid center overflow-hidden mb-8 relative">
    <Image
    src={urlFor(post.mainImage).url()}
    layout="fill" objectFit="cover"

    alt='banner'
    className='w-full h-full object-cover'
   
    quality={100}
    />
    </div>
    <h1 className='title font-bold text-2xl sm:text-3xl'>{post.title}</h1>
    <h4>
    <div>
      {post.author.name}, {new Date(post._createdAt).toLocaleString('en-US', {
        day: 'numeric',
        month:'short',
        year: 'numeric'
      })}
    </div>
    <div className='text-lg text-[#292929]/80 relative'>
    
    Brief: {post.description}.</div>
    
    </h4>
    <div className='mainArt font-serif text-xl'>
    <PortableText
    dataset={process.env.NEXT_DATASET}
    projectId={process.env.NEXT_PUBLIC_SANITY_ID}
    content={post.body}
    serializers={{
      h1: (props) => {
        <h1 className='text-2xl font-bold my-5' {...props}/>
      },
      h2: (props) => {
        <h2 className='text-xl font-bold my-5' {...props}/>
      },
      li: ({children}) => {
        <li className='ml-4 list-disc'>{children}</li>
      },
      link: ({href, children}) => {
        <a href={href} className='text-blue-500 hover:underline transform duration-300 ease-in-out' >{children}</a>
      }
    }}
    />
    </div>
    </div>
    </div>
    
    </div>
    <Recommendations post={post} morePost={morePost}/>
    
    </div>
    <div className='sticky xl:hidden bottom-0 bg-white shadow-2xl p-5 pt-2 pb-2 flex items-center justify-around'>
    <Link href='/'>
    <AiFillHome className='w-5 h-5 text-black/80'/>
    </Link>
    <AiOutlineSearch className='w-5 h-5 text-black/50'/>
    <BiBookmarks className='w-5 h-5 text-black/50'/>
    <span className='rounded-full w-10 h-10 flex items-center justify-center overflow-hidden'>
    <Image
    src='/diego.jpg'
    width={50}
    height={50}
    className='rounded-full'
    alt='userImage'
    />
    </span>
    </div>
    <AnimatePresence>
    {showNav ? (
      <motion.div
      initial={{opacity: 0, x: 300}}
      animate={{
        opacity: 1,
        x:0,
      }}
      transition={{
        duration: 1.5,
        
        ease: 'easeInOut',
        type: 'spring'
      }}
      exit={{opacity: 0, x: 300}}
      className='absolute right-0 bottom-0 top-0 w-full md:w-[400px]  min-h-screen bg-white shadow-2xl py-10 pb-2 flex-1 px-5 overflow-y-scroll scrollbar-none'>
      
      <div className='flex justify-between items-center mt-16 md:mt-2'>
      <p className='font-bold text-2xl'>REPLIES</p>
      <XMarkIcon className='font-thin cursor-pointer w-6 h-6 text-black/50' onClick={hideNav}/>
      </div>
      <div className='flex-1'>
      <AnimatePresence className='flex-1'>
    {!isOpen && (
      <motion.div
      variants={variants}
      animate={isOpen ? 'open' : 'close'}
      exit={{display: 'flex', transition: {duration: 0.2}}}
     
      className={`w-[270px] md:w-[350px]  items-start h-[60px] flex-1 flex-col rounded-sm shadow-black/50 shadow-sm p-5 mt-8 relative }`}>
      
     
      <textarea text='text' placeholder='What are your thoughts?' className='border-none outline-none text-sm resize-none w-full overflow-y-hidden h-full'
       onClick={() => {(
         setIsOpen(true),
         setShowInput(true)
   )}} />
 
   </motion.div>
    )}
        
         
     
      </AnimatePresence>
 
      <AnimatePresence>
      {showInput && (
      
       <motion.div
       initial={{opacity: 0,
      
      y: -20}}
    
        animate={{opacity: 1,
       
      y: 0}}
        transition={{
          duration: 0.2,}}
          exit={{opacity: 0, y: -20,
          transition: {duration: 0}}}
       
       className='w-[270px] md:w-[350px] flex items-start h-auto flex-col rounded-sm shadow-black/50 shadow-sm p-5 mt-8 relative  duration-[0.5s] transition-all'style={{transition: 'all .5s'}} >
       
    
         <div       
         className='flex items-center space-x-2 mb-3 transition-all'>
         <img src='/diego.jpg' className='w-10 h-10 rounded-full object-cover'/>
         <p>Diego Freeman</p>
         </div>
         <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
         
         <input 
         {...register("_id")}
         name="_id"
         type='hidden'
         value={post._id}
         />
       <input type="text" placeholder='Your name' className='border-none outline-none text-sm resize-none w-full overflow-y-hidden mb-2 text-black/50' name="name" 
       {...register('name', {required: true})}
       />
       {errors.name && <span className='font-bold text-red-600'>This field is required</span>}
         <textarea text='text' placeholder='What are your thoughts?' className='border-none outline-none text-sm resize-none w-full overflow-y-hidden text-black/50'
         {...register("comment", {required: true})}
         name='comment'
   
         />
         {errors.comment && <span className='font-bold text-red-600'>This field is required</span>}
             <div
             className='self-end flex space-x-2 justify-end mt-16  bottom-5 transition-all duration-75 ease-in-out'>
             <span className='py-2 px-3 cursor-pointer' onClick={() => {(
               setShowInput(false),
               setIsOpen(false)
             )}}>Cancel</span> 
             <input type='submit' className='bg-black/50 py-2 px-3 text-white rounded-full cursor-pointer '  value='Respond' onClick={() => {(
               setIsOpen(false),
               setShowInput(false)
             )} }/>
             </div>
         
         </form>
         
  
        </motion.div>
       
       
          
          
         
   
       
      )}
      </AnimatePresence>
      
      </div>
       
      
        
   

      
      
      <div className='mt-32 border-t border-black/30 pt-10'>
   

   {post.comments.map((comment) => (
    <div className='px-4 pb-5 mb-6 border-b border-black/20'>
    
    <div className='space-y-2'>
    <p className='font-semibold text-lg'>{comment.name}</p>
    <p className='text-sm text-black/50'>{moment(comment._createdAt).format('MMM DD, YYYY')}</p>
    
    </div>
    <p className='font-bold text-sm'>{comment.comment}</p>
    </div>
   ))}
      </div>

      </motion.div>
    ): null}
    </AnimatePresence>
    <AnimatePresence>
    <motion.div
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
        transition={{duration: 1.5, type: "spring", bounce: 0.4}}
       
    className='absolute w-12 cursor-pointer h-12 flex justify-center items-center bottom-16 z-20 bg-gray-100 rounded-full  left-[40%] shadow-lg' onClick={showNavFunction}>
    <ChatBubbleLeftIcon
    className='w-5 h-5   font-thin text-black/50' />
    </motion.div>
    
    </AnimatePresence>
    </div>

  )
}
export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }
  `;
  const posts = await client.fetch(query);
  
const paths = posts.map((post) => ({

  params: {
    slug: post.slug.current,
  }
}));

return {
  paths,
  fallback: 'blocking',
}

}

export const getStaticProps = async ({params}) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    ...,
    categories[]->{
     title
    
    
    },
    author->{
      followers,
      name,
      image,
    },
    'comments' : *[_type == "comment" && post._ref == ^._id && approved == true]
  }`;
  const morePostQuery = `*[_type == "post" ]{
    ...,
      slug,
    categories[]->{
     title
    
    
    },
    author->{
      followers,
      name,
      image,
    },
   
      }`;
     
  const post = await client.fetch(query, {
    slug: params?.slug,
  });
  const morePost = await client.fetch(morePostQuery);
  console.log(morePost, "postsss");

  return {
    props: {
      post,
      morePost,
    },
    revalidate: 60,
  }
}

export default Post