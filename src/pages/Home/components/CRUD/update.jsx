import React from 'react'
import Button from '../../../../components/Button'
import { useContext, useState } from 'react'
import UseContext from '../../../../store/context'
import { UseReducersContext } from '../../../../libs/util';
import Modal from '../../../../components/modal/modal';
import Form from '../../../../components/form';
import { IoCarSport } from 'react-icons/io5';



export default function Update() {

  const { OpenModal, HandleOpenModal, HandleCloseModal, setisOpenModal } = useContext(UseContext);
  const { dispact } = UseReducersContext();

  const [ getInputs, setgetInputs ] = useState(InitialState);
 

  const HandlegetInputs = (e) => {
     const { name, value }= e.target;
      setgetInputs((data) => ({
        ...data,
        [name]: value,
      }))
  }

  // pr validasi form inputs
  const HandleADD = () => {
    const { Title, Desc, Image} = getInputs;

    if (!Title?.trim() && !Desc?.trim()) {
       return alert("Harus isi Title dan Descripsi")
    } 

    if (!Image?.trim()) {
      return alert("Harus isi Url Image")
    } else {
      dispact({
         type: "addcars", 
         getInputs
      })
      setisOpenModal(false);
    }
    
    }
   
    
  return (
    <>
      <Button className={`bg-transparent border border-solid w-28 p-1 rounded-md text-white flex gap-x-1 items-center`}
         onClick={HandleOpenModal}>
           <IoCarSport className='ml-2 text-[20px] mr-2' /> 
            <span className='text-[12px]'> UPLOAD</span>
      </Button>

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

