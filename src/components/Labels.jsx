import React from 'react'

export default function Labels({ children, classname }) {
  return (
     <p className={classname}>{ children }</p>
  )
}
