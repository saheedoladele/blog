import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiCalendar } from 'react-icons/fi'
import dateFormat from 'dateformat'
import ProfilePlaceholder from './ProfilePlaceholder'

const BlogPost = ({imgUrl,  title, summary, author, datePosted, postUrl}) => {
  return (
    <div className="flex flex-col">
      <Link href={postUrl}>
      <Image src={imgUrl} 
                    width={400} 
                    height={400} 
                    alt="Putin"
                    unoptimized
                    className="object-cover w-full h-full rounded-md"
                     />
      </Link>
         <div className="flex items-center gap-2 mb-2 mt-1"><span className="text-secondary">theInsight.</span><FiCalendar  className="text-secondary"/> {dateFormat(datePosted, "dd, mmmm, yyyy") } </div>
        <Link href={postUrl} className='hover:text-gray-300'><h3>{title}</h3></Link>
        <p className='text-gray-500'>{summary}</p>
        <div className="flex items-center gap-2 mt-3">
                <ProfilePlaceholder name={author} />
                <span className="font-bold text-gray-300">{author}</span>
             </div>

      </div>
  )
}

export default BlogPost