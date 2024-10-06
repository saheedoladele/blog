import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { MdFilterCenterFocus } from 'react-icons/md'

const SearchBar = ({ handleChange }) => {
  return (
   
    <div className='relative w-full border border-gray-300 rounded-sm mt-16 '>
                
                        <div className='ml-2 absolute left-2 top-1/2 -translate-y-1/2'><FiSearch /></div>
                
               
                <input type="text" name="" 
                       className='h-12 w-full bg-transparent pl-10' 
                       placeholder='Search blog by author..'
                       onChange={handleChange}
                />
                <div className='ml-2  absolute right-2 top-1/2 -translate-y-1/2'>
                   <MdFilterCenterFocus size={20} />
                </div>
            </div>
  )
}

export default SearchBar