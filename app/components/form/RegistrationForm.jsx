"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useState, useContext } from "react"
import { Form } from "@/components/ui/form"

import CustomFormField from "./CustomFormField"

import { CiLock } from "react-icons/ci"
import { MdOutlineMail } from "react-icons/md"
import { FiUser } from "react-icons/fi"
import { useRouter } from 'next/navigation'

import { FormFieldType } from "@/lib/utils"
// import { createStudent } from "@/app/api/user.service"
import { toast } from "react-hot-toast"
import { UserSchema } from "@/lib/validation"


import LongButton from "../LongButton"
import { createUser } from "@/app/api/user.service"
import UserContext from "@/app/context/UserContext"
 



const RegistrationForm = () => {
    const router = useRouter()
    const [isLoading, setIsloading] = useState(false)
    const [isPassword, setIspassword] = useState(true)
    const { updateUser } = useContext(UserContext)
    const form = useForm({
        resolver: zodResolver(UserSchema),
        defaultValues: {
          email: "",
          fullName:"",
          password:"",
          passwordConfirm:""
        },
      })
    
      const togglePassword = () =>{
        setIspassword(!isPassword)
    }
    async function onSubmit(values) {
        
    
        setIsloading(true)
        try {
            const { data } = await createUser(values)
            if(data?.success){
                updateUser(data?.data)
                toast.success(data?.message)
                router.push(`/`)
            }else{
                toast.error(data?.message)
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

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    
    <CustomFormField control= {form.control} 
                       fieldType = {FormFieldType.INPUT}
                       label="Full Name" 
                       name="fullName" 
                       placeholder={"e.g John Doe"}
                       icon=""
                       iconSrc={<><FiUser className="text-gray-500" /></>}
                    />

      <CustomFormField control= {form.control} 
                       fieldType = {FormFieldType.INPUT}
                       label="Email" 
                       name="email" 
                       placeholder={"e.g info@example.com"}
                       icon=""
                       iconSrc={<><MdOutlineMail className="text-gray-500" /></>}
                    />

<CustomFormField control= {form.control} 
                       fieldType = {FormFieldType.PASSWORD}
                       label="Password" 
                       name="password" 
                       placeholder={"Password"}
                       icon=""
                       isPassword={isPassword}
                       togglePassword={togglePassword}
                       iconSrc={<><CiLock className="text-gray-500" /></>}
                    />

<CustomFormField control= {form.control} 
                       fieldType = {FormFieldType.PASSWORD}
                       label="Password Confirm" 
                       name="passwordConfirm" 
                       placeholder={"Password"}
                       icon=""
                       isPassword={isPassword}
                       togglePassword={togglePassword}
                       iconSrc={<><CiLock className="text-gray-500" /></>}
                    />
       <div>
                    <LongButton label={"Create Account"} isLoading={isLoading} />
                  </div>
                  <div className='text-sm text-gray-500 mt-[-2px] text-center'>
                  Already have an account? <a href="/login" className='text-secondary'> Login</a>
                </div>
    </form>
  </Form>
  )
}

export default RegistrationForm