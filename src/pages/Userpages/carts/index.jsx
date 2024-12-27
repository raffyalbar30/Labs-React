import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

export default function Index() {
  return (
    <div className='mr-4 ml-4 cursor-pointer'>
        <span className='text-white text-[20px] flex items-center'>
            <FaCartShopping/>
            <span className='text-[15px] mb-2 ml-1'>0</span>
        </span>
    </div>
  )
}
