import React from 'react'
import ProfilePlaceholder from './ProfilePlaceholder'

const CommnetSection = ({comment, author}) => {
  return (
    <div className="mt-6 w-full flex items-start gap-3">
            <ProfilePlaceholder name={author || ''} />
            <div className="w-full  rounded-md bg-gray-700  h-auto px-2 py-2.5  text-gray-500 ">
                {comment}
            </div>
         </div>
  )
}

export default CommnetSection