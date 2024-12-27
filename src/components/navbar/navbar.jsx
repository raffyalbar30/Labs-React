import React from 'react'
import Labels from '../Labels'



export default function Navbar({children}) {
  return (
      <div className='flex justify-between items-center'>
         <div className='p-2'> 
             <Labels classname={`text-[24px] font-semibold text-white`}>Raff Cars</Labels>
         </div>
         <div className='flex items-center gap-x-1 mr-2'> 
                 {children}
         </div>
      </div>
  )
}
