'use client'

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { FiCalendar, FiEdit, FiTrash } from "react-icons/fi";
import dateFormat from 'dateformat'
import { toast } from 'react-hot-toast'
import { useContext, useEffect, useState } from "react";
import { createComment, deletePost, getSinglePost } from "../api/user.service";
import RenderPostContent from "../components/RenderPostContent";
import UserContext from "../context/UserContext";
import DeleteDialogue from "../components/DeleteDialogue";
import ProfilePlaceholder from "../components/ProfilePlaceholder";
import CommnetSection from "../components/CommnetSection";
import AlertInfo from "../components/AlertInfo";
import { FaComment, FaRegComment } from "react-icons/fa6";


export default function Home() {
  const [post, setPost] = useState(null)
  const [losding,setLoding] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [open, setOpen] = useState(false)
  const [comment, setComment] = useState('')

  const { user } = useContext(UserContext)
  const searchParams = useSearchParams()
  const router = useRouter()
  const postId = searchParams.get('postId')

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  const fetchPost = async() =>{
    try {
      setLoding(true)
      const { data} = await getSinglePost(postId)
      if(data?.success){
        setPost(data?.data)
      }else{
        toast.error("Something went wrong!")
      }
      setLoding(true)
    } 
   catch (error) {
    console.log(error);

    if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(`Error: ${error.response.data?.message || error.response.statusText}`);
    } else if (error.request) {
        // Request was made but no response received
        toast.error('Network error. Please check your internet connection and try again.');
    } else {
        // Something else happened while setting up the request
        toast.error(`Error: ${error.message}`);
    }
} finally {
     setLoding(false)
}
  }

  const handleDelete = async() =>{
    try {
      setDeleting(true)
      const { data} = await deletePost(postId)
      if(data?.success){
        toast.success(data?.message)
        router.push('/')
      }else{
        toast.error("Something went wrong!")
      }
      setDeleting(true)
    } 
   catch (error) {
    console.log(error);

    if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(`Error: ${error.response.data?.message || error.response.statusText}`);
    } else if (error.request) {
        // Request was made but no response received
        toast.error('Network error. Please check your internet connection and try again.');
    } else {
        // Something else happened while setting up the request
        toast.error(`Error: ${error.message}`);
    }
} finally {
     setDeleting(false)
}
  }

  const handleChange =(e) =>{
    setComment(e.target.value)
  }

  const addComment = async() =>{
    const cmtData = {
      content: comment,
      user: user?._id,
    }
    
    try {
      const { data } = await createComment(cmtData, post?._id)
      if(data?.success){
        toast.success(data?.message)  
        setComment('')
    }
    } catch (error) {
     console.log(error);
      
    }
    
  }
  useEffect(()=>{
   fetchPost()
  },[])

  return (
    <>
    <div className="container py-4 flex flex-col items-center mt-6">

          <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2 mt-3">
                <Image src={"/images/avater.jpeg"} 
                       width={50} 
                       height={50}
                       className="w-10 h-10 rounded-full"
                       alt="aveter"
                       unoptimized
                        />
                <span className="font-bold text-gray-300">{post?.user?.fullName}</span>
            </div>

{
  post?.user?._id === user?._id ?
  <div className="flex items-center gap-1">
              <Link href={`/create-blog?postId=${post?._id}`} className="bg-secondary text-white p-2 rounded-md flex items-center gap-1 hover:opacity-75"><FiEdit /> Edit</Link>

              <button onClick={handleOpen} 
                      className="bg-red-400 text-white p-2 rounded-md flex items-center gap-1 hover:opacity-75">
                        {
                          deleting ? 'Deleting...' :
                          <><FiTrash /> Delete</>
                        }
                        
                      </button>
            </div>
            :
            <></>
}
            
          </div>

     <h2 className="py-8"> <span className="text-secondary">{post?.title}</span> </h2>
     <p className="text-gray-500">{post?.summary}</p>
     <div className="flex items-center gap-2 mb-5 mt-5"><span className="text-secondary">theInsight.</span> <FiCalendar  className="text-secondary"/> {dateFormat(post?.createdAt, "dd, mmmm, yyyy") } </div>

     <div className="mt-4 mb-16">
             
             <Image src={post?.image} 
                    width={400} 
                    height={400} 
                    alt="Putin"
                    unoptimized
                    className="object-cover w-full h-full rounded-md border duration-200 hover:scale-105"
                     />
             
          </div>

          <div className="flex"> 
            <RenderPostContent content={post?.content} />
         </div>

<div className="mt-4 flex items-center gap-1">
  <FaComment size={26} className="text-secondary" /> {post?.comments?.length || 0}
</div>
{
  user === null ?
  <div className="flex items-start">
         <AlertInfo message={<> You need to be a registered user to be able to write comment,  <Link href={'/signup'}><strong>Register Now </strong></Link> OR <Link href={"/login"}><strong>login</strong></Link> if you have already registered</>} />
         </div>
         :
         <>
         <div className="mt-12 w-full flex items-start gap-2">
         <ProfilePlaceholder name={user?.fullName || ''} />
            <textarea name="comment"  
                      className="w-full rounded-md bg-transparent h-24 px-6 py-2 border"
                      placeholder="Type your comment..."
                      value={comment}
                      onChange={handleChange}
                      >
            </textarea>
         </div>
         <div className="flex items-start justify-start mt-2 ">
         <button onClick={addComment} className="bg-secondary text-wrap rounded-md px-4 py-2.5">
             Post Comment
         </button>
      </div>
      </>
}
         
         

        {
          post?.comments?.map((comment)=>(
            <CommnetSection author={comment?.user?.fullName} comment={comment?.content} />
          ))
        }
    

    </div>
<DeleteDialogue title="Delete Post" 
                message="You have choosen to delete this post, do you still what to delete?"
                open={open}
                handleClose={handleClose}
                handleDelete={handleDelete}
                />
    </>
  );
}
