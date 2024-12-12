import React from 'react'
import Labels from '../../components/Labels'
import Productlist from './components/productlist'
import Update from './components/CRUD/update'
import UtilityContext from '../../libs/util'







export default function Home() {
 

  return (
    <UtilityContext>
      <div className='border border-slate-500 flex justify-center rounded-md w-full'>
          <div className='flex-wrap w-full'>
          <div className='flex justify-center items-center gap-x-8 mt-4'>
            <Labels classname={`text-gray-500 text-2xl font-semibold`}>Labs CRUD MOBIL</Labels>
            <Update/>
          </div>
          <div className='ml-4 mr-4'>
              <div className='w-full mt-8'>
                <div className='ml-32'>
                  <div className='grid grid-cols-4 gap-x-2'>
                      <Productlist />
                  </div>
                </div>
              </div>
          </div>
          </div>
      </div>
    </UtilityContext>
  )
}
