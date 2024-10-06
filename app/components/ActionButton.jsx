import React from 'react'

const ActionButton = ({ label, fn, type}) => {
  return (
    <button onClick={fn} className={`${type === 'delete' ? 'bg-red-400' : 'bg-secondary'} text-white p-2 rounded-md flex items-center gap-1`}><FiTrash /> {label}</button>
  )
}

export default ActionButton