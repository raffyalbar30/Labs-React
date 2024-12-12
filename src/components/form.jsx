import React from 'react'

export default function Form( { onChange, Onclick, Onclose,
     placeholdername, placeholderdesc, placeholderurl }) {
  return (
    <div className='flex-wrap mb-4'>
    <p className='text-slate-500 float-left'> Nama</p>
    <input type='text' placeholder={placeholdername} onChange={onChange}
     name='Title' className='mt-2 rounded-md p-2 w-full border border-zinc-600' />
    <p className='text-slate-500 mt-2 float-left'>Descripsi</p>
    <input type='text' placeholder={placeholderdesc}  onChange={onChange} 
     name='Desc' className='mt-2 rounded-md p-2 w-full border border-zinc-600' />
    <p className='text-slate-500 mt-2 float-left'> Image </p>
    <input type='text' placeholder={placeholderurl} onChange={onChange} 
      name='Image' className='mt-2 rounded-md w-full p-2 border border-zinc-600' />
    <div className='mt-2'>
    <button data-modal-hide="popup-modal" type="button" 
    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none
     focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex 
     items-center px-5 py-2.5 text-center"
       onClick={Onclick}>
          Yes, I'm sure
     </button>
    <button data-modal-hide="popup-modal" type="button"
     onClick={Onclose} 
    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      No, cancel
    </button>
    </div>
  </div>

  )
}
