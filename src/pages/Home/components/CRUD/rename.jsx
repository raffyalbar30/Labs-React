import React from 'react';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { useContext } from 'react';
import UseContext from '../../../../store/context';
import { UseReducersContext } from '../../../../libs/util';
import { useState } from 'react';
import Modal from '../../../../components/modal/modal';
import Form from '../../../../components/form';


 const InitialState = [
  { 
    Title: "", 
    Desc : "", 
    Image: ""
  }];

const Rename = ({ item }) => {

   
 const [ getRename, setgetRename ] = useState(InitialState);
 const { dispact } = UseReducersContext();

 const HandleRename = () => {
  dispact({
     type: "rename",
     item: {
          id: item.id, 
          Title: getRename.Title,
          Desc : getRename.Desc,
          Image : getRename.Image
     }
  })
   
}

const HandlegetInputs = (e) => {
  const { name, value } = e.target;
   setgetRename((data) => ({
      ...data, 
      [name]: value
   }))
}

 
const { HandleRenameModal, OpenRename, HandleCloseRename } = useContext(UseContext); 
   
    return (
        <>
           <MdOutlineDriveFileRenameOutline
            onClick={HandleRenameModal} />
             <Modal className={`${ !OpenRename ? "hidden" : "active"}`}> 
                <Form Onclick={HandleRename}
                  onChange={HandlegetInputs} 
                  Onclose={HandleCloseRename}
                  placeholdername={item.Title}
                  placeholderdesc={"Masukan Description"}
                  placeholderurl={"Masukan Image Url"}
                  />
           </Modal>
         
        </>
    );

    
}

export default Rename;

  
 const FormRename = ({ item }) => {
 
 const [ getRename, setgetRename ] = useState(InitialState);
 const { dispact } = UseReducersContext();
  


   
  return (
     <>
    
           <div className='flex-wrap mb-4'>
           <p className='text-slate-500 float-left'> Rename Name Cars</p>
           <input type='text'
            name='Title'  className='mt-2 rounded-md p-2 w-full border border-zinc-600' 
            placeholder={item.Title}
            onChange={HandleOnchange}
             />
           <p className='text-slate-500 mt-2 float-left'> Rename Description </p>
           <input type='text' placeholder='Description..' 
            name='Desc' className='mt-2 rounded-md p-2 w-full border border-zinc-600'
            onChange={HandleOnchange}
             />

           <p className='text-slate-500 mt-2 float-left'>Rename URL Image</p>
           <input type='text' placeholder=' image url your cars..' 
            name='Image' className='mt-2 rounded-md w-full p-2 border border-zinc-600'
            onChange={HandleOnchange}
             />

           <div className='mt-2'>
           <button data-modal-hide="popup-modal" type="button" 
           class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            onClick={HandleDispact} >
                 Yes, I'm sure
            </button>
           <button data-modal-hide="popup-modal" type="button" 
           class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
             No, cancel
           </button>
           </div>
          </div>
    
     </>

  )

}