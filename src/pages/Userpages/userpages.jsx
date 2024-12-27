import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Searching from '../Home/components/searching'
import Productlist from '../Home/components/productlist'
import UtilityContext from '../../libs/util'
import Index from './carts'

export default function Userpages() {
  return (
    <UtilityContext>

      <div className='border border-solid'>
         <div className='border bg-blue-700'>
            <Navbar>
              <Searching />
              <Index />
            </Navbar>
            </div>
            <div className='mt-2 flex justify-center mr-2 ml-2'>
                <div className='grid grid-cols-3 gap-x-2'>
                       <Productlist />
                  </div>
              </div>
  
     </div>
    </UtilityContext>
  )
}
