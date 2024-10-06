import Link from 'next/link'
import React from 'react'
import { FiHome } from 'react-icons/fi'
import NavBar from './components/NavBar'

const page= () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
        
        <h2 className='text-secondary'>Page Not Found</h2>
        <p>Page you requested for con not be found</p>
        <Link href={"/"} className='p-2 bg-secondary text-white rounded-md duration-200 hover:scale-105 mt-3 flex items-center gap-1'> <FiHome size={20} /> Return Home</Link>
   </div>
  )
}

export default page