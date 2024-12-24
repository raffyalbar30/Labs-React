import React from 'react'

export default function Inputs({ name, onChange, placeholderurl, className }) {
  return (
      <>
       <input type='text' placeholder={placeholderurl} onChange={onChange} 
         name={name} className={className} />
      </>
  )
}
