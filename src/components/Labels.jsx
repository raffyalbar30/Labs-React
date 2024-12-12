import React from 'react'

export default function Labels({ children, classname }) {
  return (
    <div>
         <p className={classname}>{ children }</p>
    </div>
  )
}
