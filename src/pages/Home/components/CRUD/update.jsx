import React from 'react'
import Button from '../../../../components/Button'
import { useContext, useState } from 'react'
import UseContext from '../../../../store/context'
import { UseReducersContext } from '../../../../libs/util';
import Modal from '../../../../components/modal/modal';
import Form from '../../../../components/form';



export default function Update() {

  const { OpenModal, HandleOpenModal, HandleCloseModal, } = useContext(UseContext);
  const { dispact } = UseReducersContext();

  const [ getInputs, setgetInputs ] = useState(InitialState);

  const HandlegetInputs = (e) => {
     const { name, value }= e.target;
      setgetInputs((data) => ({
        ...data,
        [name]: value,
      }))
  }

  const HandleADD = () => {
     dispact({
        type: "addcars", 
        getInputs
     })
     
    }
   
    
  return (
    <>
    <Button onClick={HandleOpenModal}>Add Cars</Button>
    <Modal className={`${ !OpenModal ? "hidden" : "active"}`}> 
         <Form Onclick={HandleADD}
          onChange={HandlegetInputs} 
          Onclose={HandleCloseModal}
          placeholdername={"Masukan Nama"}
          placeholderdesc={"Masukan Description"}
          placeholderurl={"Masukan Image Url"}
          />
    </Modal>
    </>
  )
}


 let nextId = 3;
 const InitialState = [
  { 
    id: nextId++,
    Title: "", 
    Desc : "", 
    Image: ""
  }];

