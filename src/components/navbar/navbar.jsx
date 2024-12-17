import React from 'react'
import Labels from '../Labels'
import { CiSearch } from "react-icons/ci";
import Update from '../../pages/Home/components/CRUD/update';


export default function Navbar() {
  return (
      <div className='flex justify-between items-center'>
         <div className='p-2'> 
             <Labels classname={`text-[24px] font-semibold text-white`}>Raff Cars</Labels>
         </div>
         <div className='flex items-center gap-x-1 mr-2'> 
                 <CiSearch className='text-white text-[24px] font-semibold'/>
                 <Update />
         </div>
      </div>
  )
}
