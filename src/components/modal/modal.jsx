import React from 'react'
import ReactDOM from 'react-dom';

export default function Modal({ children, className }) {
  return ReactDOM.createPortal (
      <div className={` ${className} fixed inset-0 flex mt-32 justify-center`}> 
          <div className='border bg-white border-slate-500 p-2 w-1/3 rounded-md absolute'>
            { children }
          </div>
      </div>,

    document.getElementById("portal")
  )

}
