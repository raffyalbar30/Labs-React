import React from 'react'
import Labels from '../../components/Labels'
import Productlist from './components/productlist'
import Update from './components/CRUD/update'
import UtilityContext from '../../libs/util'
import Navbar from '../../components/navbar/navbar'







export default function Home() {
 

  return (
    // refactor UI slicing 
    <div className='w-full h-full'>
      <div className='border-slate-500 border w-full'> 
         <UtilityContext>
          <div className='w-full bg-[#1e40af]'> 
             <Navbar/>
          </div>
          <div className='mt-2 flex justify-center mr-2 ml-2'>
             <div className='grid grid-cols-3 gap-x-2'>
               <Productlist />
             </div>
          </div>
         </UtilityContext>
       </div>
    </div>
    )

}
