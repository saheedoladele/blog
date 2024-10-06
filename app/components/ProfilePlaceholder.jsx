import { getFirstLetters } from '@/lib/utils'
import React from 'react'

const ProfilePlaceholder = ({ name, fn}) => {
  return (
    <div onClick={fn} className="h-10 w-10 p-1 rounded-full bg-secondary text-white text-xl font-bold flex items-center justify-center hover:cursor-pointer">
        {getFirstLetters(name)}
    </div>
  )
}

export default ProfilePlaceholder