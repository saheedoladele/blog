import React from 'react'


import ClipLoader from "react-spinners/ClipLoader";


const LongButton = ({ label, isLoading, icon}) => {
  return (
    <button type='submit' disabled={isLoading}
        className="flex w-full justify-center rounded-sm bg-secondary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300 items-center gap-1"
        >
          {isLoading && 
            
            <ClipLoader
              loading={isLoading}
              size={24}
              aria-label="Loading Spinner"
              data-testid="loader"
              className='text-white'
      />
          }
        {label}
        {icon}
    </button>
  )
}

export default LongButton