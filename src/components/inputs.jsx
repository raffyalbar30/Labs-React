import React from 'react'

export default function Inputs({ onChange, placeholderurl, className }) {
  return (
      <>
       <input type='text' placeholder={placeholderurl} onChange={onChange} 
         name='Image' className={className} />
      </>
  )
}
