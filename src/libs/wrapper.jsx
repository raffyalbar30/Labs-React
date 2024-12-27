import React from 'react'
import Rename from '../pages/Home/components/CRUD/rename';
import Delate from '../pages/Home/components/CRUD/delate';


export default function Wrapper({ item }) {
    const  HiddenButton = localStorage.getItem("auth");
  return (
      <>
      {
           HiddenButton ? <AdminFeature item={item} /> : <UserFeature />
      }
      </>
  )
}

const AdminFeature = ( { item }) => { 
     return (
        <div className='flex gap-x-4 items-center float-right text-[20px] mr-4 cursor-pointer mt-4'>
           <Rename item={item} />
           <Delate item={item} />
      </div>
     )
}

const UserFeature = () => {
    return (
         <div className='flex justify-center gap-x-4 items-center text-[20px] mr-4 cursor-pointer mt-4'>
                 
         </div>
    )
}