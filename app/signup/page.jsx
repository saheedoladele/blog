import React from 'react'
import RegistrationForm from '../components/form/RegistrationForm'

const signup = () => {
  return (
    <div className='flex items-center justify-center  h-screen '>

        <div className=' border-1 md:w-1/3 shadow-md rounded-md px-4 py-2 bg-primaryLight'>
            <h3 className='text-secondary'>Create Account</h3>
            <p className='text-gray-300 mb-4'>You will need to complete the form bellow to create your account, for you to be able to create, edit and update your post</p>
            <RegistrationForm />
        </div>
        
    </div>
  )
}

export default signup