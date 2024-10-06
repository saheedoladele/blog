import React from 'react'

const RenderPostContent = ({ content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }}  />
    
  )
}

export default RenderPostContent