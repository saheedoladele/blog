import React from 'react'
import BlogPost from './BlogPost'

const PostList = ({blogs}) => {
  return (
    <div className="grid md:grid-cols-3 w-full py-24 gap-5">

      {
        blogs.map((post) =>
        <BlogPost key={post?._id}
                  title={post?.title}
                  summary={post?.summary}
                  imgUrl={post?.image}
                  postUrl={`/single-post?postId=${post?._id}`}
                  author={post?.user?.fullName}
                  datePosted={post?.createdAt}
                  
        
        />
        )
      }

     </div>
  )
}

export default PostList