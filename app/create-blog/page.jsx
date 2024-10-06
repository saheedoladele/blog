"use client" 

import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import InputControl from '../components/form/InputControl'
import 'react-quill/dist/quill.snow.css';
import { Label } from '@/components/ui/label';
import { toast } from 'react-hot-toast'
import UserContext from '../context/UserContext';
import { createPost, getSinglePost, updatePost } from '../api/user.service';
import CustomBtn from '../components/CustomBtn';
import { FiArrowRightCircle, FiEdit } from 'react-icons/fi';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']  // remove formatting button
  ],
};


const page = () => {

  const searchParams = useSearchParams()
  const {user} = useContext(UserContext)
  const [value, setValue] = useState('')

  const [isLoading, setIsloading] = useState(false)
  const [postData, setPostdata] = useState({
    title:"",
    summary:"",
    image:""
  })

  const postId = searchParams.get('postId')


  const fetchPost = async() =>{
    try {
      setIsloading(true)
      const { data} = await getSinglePost(postId)
      if(data?.success){
        setPostdata({
          ...postData,
          title: data?.data?.title,
          summary: data?.data?.summary,
        })
        setValue(data?.data?.content)
      }else{
        toast.error("Something went wrong!")
      }
      setIsloading(true)
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
     setIsloading(false)
}
  }
  const handleChange = (event) =>{
    setPostdata({...postData, [event.target.name]:event.target.value})
  }

  const router = useRouter()

  const handleFileChange = (e) => {
    setPostdata({ ...postData, [e.target.name]: e.target.files[0] });
  };
  let formData = new FormData();

  formData.append("title", postData.title);
  formData.append("summary", postData.summary);
  formData.append("content", value);
  formData.append("image", postData.image);
  formData.append("user", user?._id);
  
  const handleSubmit = async() => {
  
    setIsloading(true)
    try {
      let resp
        if(postId === null){
          resp = await createPost(formData)
        }else{
          resp = await updatePost(formData, postId)
        }
        const { data } = resp
        if(data?.success){
            
            toast.success(data?.message)
 
            router.push("/")
        }
        
        setIsloading(false)
        
    } catch (error) {
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
         setIsloading(false)
    }
   
  }

  useEffect(()=>{
    postId !== null ?
    fetchPost()
    :
    ''
  },[])
  return (
    <div className='flex items-center justify-center  h-screen '>

    <div className=' border-1 md:w-1/2 shadow-md rounded-md px-4 py-2 bg-primaryLight'>
        <h3 className='text-secondary'>Create Post</h3>
        <p className='text-gray-300 mb-4'>Complete the form bellow to create your post.</p>
        
        <InputControl name="title"
                      label="Post Title"
                      placeholder="Post title"
                      type="text"
                      fn={handleChange}
                      value={postData.title}
                     />

<InputControl name="summary"
                      label="Post Summary"
                      placeholder="Post Summary/Overview"
                      type="text"
                      fn={handleChange}
                      value={postData.summary}
                     />

<InputControl name="image"
                      label="Post Image"
                      placeholder=""
                      type="file"
                      fn={handleFileChange}
                     />

<div className='mb-24'>
  <Label>Post Content</Label>
  <ReactQuill theme="snow" value={value} onChange={setValue} className='h-48' modules={modules} />
</div>

<CustomBtn label={postId === null ? "Create Post" : "Update Post"}  
            isLoading={isLoading} 
            fn={handleSubmit} 
            icon={postId === null ? <FiArrowRightCircle /> : <FiEdit />} />


    </div>
    
</div>
  )
}

export default page