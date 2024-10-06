import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dateFormat from 'dateformat'
import { FiCalendar } from 'react-icons/fi'
import ProfilePlaceholder from './ProfilePlaceholder'

const TrendingPost = ({blog}) => {
  return (
    <div className="grid md:grid-cols-2 gap-5 w-full">
       
             <Link href={`single-post?postId=${blog?._id}`}>
             <Image src={blog?.image} 
                    width={400} 
                    height={400} 
                    alt="Putin"
                    unoptimized
                    className="object-cover w-full h-full rounded-md  duration-200 hover:scale-105"
                     />
             </Link>
         
          <div className="flex flex-col">
             <div className="flex items-center gap-2 mb-2"><span className="text-secondary">theInsight.</span> <FiCalendar  className="text-secondary"/> {dateFormat(blog?.createdAt, "dd, mmmm, yyyy") } </div>
             <Link href={`single-post?postId=${blog?._id}`} className="hover:text-gray-400 duration-200 hover:scale-105"><h2 className="mb-2">{blog?.title}</h2></Link>
             <p className="text-gray-500">{blog?.summary}</p>
             <div className="flex items-center gap-2 mt-3">
             
                <ProfilePlaceholder name={blog?.user?.fullName || ''} />
                <span className="font-bold text-gray-300">{blog?.user?.fullName}</span>
             </div>
          </div>
     </div>
     
  )
}

export default TrendingPost