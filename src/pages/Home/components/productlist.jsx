import React from 'react'
import { useContext } from 'react';
import UseContext from '../../../store/context';
import Rename from './CRUD/rename';
import Delate from './CRUD/delate';



export default function Productlist() {
    const { task } = useContext(UseContext);
  
  return (
    <>
    {
        task?.map((item) => (
          <>  
              <div className='bg-slate-300 rounded-md h-[300px] p-4 mb-4'>
                  <img src={item.Image} className='w-[300px] mx-auto h-[120px] rounded-md'/>
                  <p className='text-[15px] text-slate-800 font-semibold text-left ml-7 mt-4'>{item.Title}</p>
                  <p className='text-left ml-7'>{ item.Desc}</p>
                  <div className='flex gap-x-4 float-right text-[20px] mr-4 cursor-pointer'>
                    <Rename item={item} />
                    <Delate item={item} />
                  </div>
              </div>
          </>
        ))
    }
    </>
  )
}
