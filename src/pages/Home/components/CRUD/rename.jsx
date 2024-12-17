import React from 'react';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { UseReducersContext } from '../../../../libs/util';
import { useState } from 'react';
import Modal from '../../../../components/modal/modal';
import Form from '../../../../components/form';
import Button from '../../../../components/Button';




const Rename = ({ item }) => {


 const [ getRename, setgetRename ] = useState({
   id: item?.id,
   Title: item?.Title, 
   Desc: item?.Desc,
   Image: item?.Image
});


 const { dispact } = UseReducersContext();


 const HandleRename = () => {
  if (getRename.id) {
    dispact({
       type: "rename",
       item: {
            id: getRename?.id, 
            Title: getRename?.Title,
            Desc : getRename?.Desc,
            Image : getRename?.Image
       }
    })
  }
   
}

const HandlegetInputs = (e) => {
  const { name, value } = e.target;
   setgetRename((data) => ({
      ...data, 
      [name]: value
   }))
}

 const [ OpenRename, setOpenRename ] = useState();
 
  const HandleRenameModal = (e) => {
  setOpenRename(true)
 }

  const HandleCloseRename = (e) => {
  e.preventDefault();
  setOpenRename(false)
 }
  

    return (
        <div>
           <Button className={`bg-transparent border border-solid border-zinc-400 w-28 p-2 rounded-md flex gap-x-2 items-center `}
             onClick={HandleRenameModal} >
                 <MdOutlineDriveFileRenameOutline className='ml-2 text-[24px] p-1' /> 
                      <span className='text-[12px]'>RENAME</span>
            </Button>

                  <>
                    <Modal className={`${ !OpenRename ? "hidden" : "active"}`}> 
                          <Form Onclick={HandleRename}
                            onChange={HandlegetInputs}
                            placeholdername={item?.Title} 
                            Onclose={HandleCloseRename}
                            placeholderdesc={"Masukan Description"}
                            placeholderurl={"Masukan Image Url"}
                            />
                     </Modal>
                  </>

        </div>

    );

    
}

export default Rename;

  
