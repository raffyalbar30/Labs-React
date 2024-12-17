import React, { createContext, useContext, useReducer } from 'react'
import UseContext from '../store/context';
import { useState } from 'react'
import { Products  } from '../data/product';


 const Usereducercontext = createContext();

  export const UseReducersContext = () => {
      return useContext(Usereducercontext);
  }

 export default function UtilityContext({ children }) {

  const [ task, dispact ] = useReducer(
    useCRUD, 
    Products
  )
  

  function useCRUD(data, actions) {
    switch (actions.type) {
      case "addcars": {
        const { Title, Desc, Image} = actions.getInputs;
        const newData = {
           id : data.length, 
           Title,
           Desc,
           Image 
        }

        return [
          ...data, newData
        ];
      };

      case "rename": {
        return data.map((datas) => {
          if (datas.id === actions.item.id) {
            return actions.item; 
          }
          return datas; 
        });
      }
      

      case 'deleted': {
        return data.filter(t => t.id !== actions.id);
      };

      default: {
         
      }
    } 
    
  }


  
  const [ OpenModal, setisOpenModal ] = useState();
  
 

  const HandleOpenModal = (e) => {
      e.preventDefault();
      setisOpenModal(true)
  }

  const HandleCloseModal = (e) => {
     e.preventDefault();
     setisOpenModal(false)
  }
  
 

  return (
    <UseContext.Provider value={{
      OpenModal,
      setisOpenModal,
      HandleOpenModal,
      HandleCloseModal,
      task
      }}>
      <Usereducercontext.Provider value={{ dispact }}>
        { children }
      </Usereducercontext.Provider>
    </UseContext.Provider>
  
  )
}







