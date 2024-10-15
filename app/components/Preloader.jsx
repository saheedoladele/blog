import React from 'react'
import PropagateLoader  from "react-spinners/PropagateLoader";

const Preloader = ({isLoading}) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>

<PropagateLoader
              loading={isLoading}
              size={24}
              color='#171bd8'    
      />
    </div>
  )
}

export default Preloader