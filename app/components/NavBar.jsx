'use client'

import React, { useState, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdClose } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import UserContext from '../context/UserContext'
import { getFirstLetters } from '@/lib/utils'
import ProfilePlaceholder from './ProfilePlaceholder'



const NavBar = () => {
    const [showDropdown, setShowdropdown] = useState(false)
    const router = useRouter()
 
    const {user, updateUser} = useContext(UserContext)
    const patheName = usePathname()

    const handleShowdropdown = () => setShowdropdown(true)
    const handleClosedropdown = () => setShowdropdown(false)

    const handleLogout = () =>{
        updateUser(null)
        router.push('/')
    }
  return (
    <div className='container py-3 h-16 flex items-center justify-between'>
        <Link href={"/"}>
            <h2>the<span className='text-secondary'>Insight.</span></h2>
        </Link>

        <ul className='flex items-center gap-5'>
            <li>
                <Link href={"/"} className={patheName === "/" ? "text-secondary font-bold": ""}> Blog </Link>
            </li>
           {
             user !== null ? 
             <>
                <li>
                <Link href={"/create-blog"} className={patheName === "/create-blog" ? "text-secondary font-bold": ""}>Create Blog </Link>
            </li>

            <li>
                <div className='relative'>
                         <ProfilePlaceholder name={user?.fullName || ''} fn={handleShowdropdown} />
                {
                    showDropdown && 
                    (
                        <div className='absolute top-0 right-0 bg-primaryLight p-5'>
                            <MdClose className='w-full cursor-pointer' onClick={handleClosedropdown}/>
                            <Link className='hover:text-secondary' onClick={handleClosedropdown} href={"/profile"}>Profile</Link>
                            <button className='hover:text-secondary' onClick={() =>{
                                handleClosedropdown()
                                handleLogout()
                            }} >Logout</button>
                       </div>
                    )
                }
                </div>
            </li>
             </>
             :
<>
<li>
                <Link href={"/login"} className={patheName === "/login" ? "text-secondary font-bold": ""} > Login </Link>
            </li>
            <li>
                <Link href={"/signup"} className={patheName === "/signup" ? "text-secondary font-bold": ""} > Signup </Link>
            </li>
</>
           }
            
            
        </ul>
    </div>
  )
}

export default NavBar