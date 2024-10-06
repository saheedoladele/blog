import React from 'react'
import AuthForm from '../components/form/AuthForm'

const login = () => {
  return (
    <div className='flex items-center justify-center  h-screen '>

        <div className=' border-1 md:w-1/3 shadow-md rounded-md px-4 py-2 bg-primaryLight'>
            <h3 className='text-secondary'>Singin</h3>
            <p className='text-gray-300 mb-4'>You will need to signin as a user for you to be able to create, edit and update your post</p>
            <AuthForm />
        </div>
        
    </div>
  )
}

export default login