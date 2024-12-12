import React from 'react'

export default function Button({ children, onClick}) {
  return (
    <div className='pl-6'>
        <button  className='w-28 bg-purple-600 p-1 rounded-md text-white' onClick={onClick}>{ children }</button>
    </div>
  )
}
