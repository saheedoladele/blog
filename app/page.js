"use client"

import { blog, blogs } from "./constant/blog";

import TrendingPost from "./components/TrendingPost";
import PostList from "./components/PostList";
import { useEffect, useState } from "react";
import { getAllPost } from "./api/user.service";
import {toast} from "react-hot-toast";

export default function Home() {
  const [isLoading, setIsloading] = useState(false)
  const [posts, setPosts] = useState([])


  
  const fetchPosts = async() =>{
    try {
      setIsloading(true)
      const { data} = await getAllPost()
      if(data?.success){
        setPosts(data?.data)
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
  useEffect(()=>{
   fetchPosts()
  },[])
  return (
    <div className="container py-4 flex flex-col items-center mt-6">
     <h2 className="py-8"> <span className="text-secondary">Trending</span> Post</h2>
     
    <TrendingPost blog={posts[0]} />
    <PostList blogs={posts} />
    </div>
  );
}
