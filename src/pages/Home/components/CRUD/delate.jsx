import React from 'react'
import { UseReducersContext } from '../../../../libs/util';
import { FaTrashAlt } from "react-icons/fa";

export default function Delate({item}) {
    const { dispact } = UseReducersContext();


  return (
    <div>
        <button onClick={() => {
            dispact({
               type: "deleted", 
               id: item.id
         })
        }} ><FaTrashAlt/></button>
    </div>
  )
}
