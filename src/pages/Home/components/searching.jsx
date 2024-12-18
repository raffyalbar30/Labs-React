import React from 'react'
import Inputs from '../../../components/inputs'
import { CiSearch } from 'react-icons/ci'

export default function Searching() {
  return (
    <div className='flex items-center relative'>
         <Inputs placeholderurl={`Apa yang inin kamu cari...`} 
         className={`'mt-2 w-full px-12 rounded-md p-1 border border-zinc-600' `} />
          <div className='absolute z-10 ml-2 border border-l-0 border-t-0 border-b-0 p-1'>
            <CiSearch className='text-blue text-[24px] font-semibold mr-1'/>
          </div>
    </div>
  )
}
