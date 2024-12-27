import React from 'react'
import { useContext } from 'react';
import UseContext from '../../../store/context';
import Rename from './CRUD/rename';
import Delate from './CRUD/delate';
import Wrapper from '../../../libs/wrapper';






export default function Productlist() {
    const { task, filterdata } = useContext(UseContext);
    
  return (
    <>
    {
       filterdata ? 
       <div className='bg-transparent border border-solid border-zinc-600 rounded-md h-[300px] p-4 mb-4' key={filterdata?.id}>
            <img src={filterdata?.Image} className='w-[300px] mx-auto h-[120px] rounded-md'/>
            <p className='text-[15px] text-slate-800 font-semibold text-left ml-7 mt-4'>{filterdata?.Title}</p>
            <p className='text-left ml-7'>{filterdata?.Desc}</p>
            <div className='flex gap-x-4 items-center float-right text-[20px] mr-4 cursor-pointer'>
              <Rename filterdata={filterdata} />
              <Delate />
            </div>
       </div> 
      :
       task?.map((item) => (
          <>  
              <div className='bg-transparent border border-solid border-zinc-600 rounded-md h-[300px] p-4 mb-4' key={item?.id}>
                  <img src={item?.Image} className='w-[300px] mx-auto h-[120px] rounded-md'/>
                  <p className='text-[15px] text-slate-800 font-semibold text-left ml-7 mt-4'>{item?.Title}</p>
                  <p className='text-left ml-7'>{ item?.Desc}</p>
                  <Wrapper item={item} />
              </div>
          </>
        ))

    }
    </>
  )
}
