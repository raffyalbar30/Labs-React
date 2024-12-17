import React from 'react'

export default function Button({ children, onClick, className}) {
  return (
    <div className='pl-6'>
        <button  className={className}
        onClick={onClick} >{ children }</button>
    </div>
  )
}
