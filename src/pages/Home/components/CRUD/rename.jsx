import React from 'react';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { UseReducersContext } from '../../../../libs/util';
import { useState } from 'react';
import Modal from '../../../../components/modal/modal';
import Form from '../../../../components/form';
import Button from '../../../../components/Button';





 const Rename = ({ item, filterdata}) => {


 const [ getRename, setgetRename ] = useState({
   id: item?.id,
   Title: item?.Title, 
   Desc: item?.Desc,
   Image: item?.Image
 });

 const [ getSearch, setgetSearch ] = useState({
   id: filterdata?.id,
   Title: filterdata?.Title,
   Desc: filterdata?.Desc,
   Image: filterdata?.Image
 });






 const { dispact } = UseReducersContext();


 const HandleRename = () => {
    dispact({
       type: "rename",
       item: {
            id: filterdata ? getSearch?.id : getRename?.id, 
            Title: filterdata ? getSearch?.Title : getRename?.Title,
            Desc : filterdata ? getSearch?.Desc : getRename?.Desc,
            Image : filterdata ? getSearch?.Image : getRename?.Image
        }
    })
    setOpenRename(false)
}

 

 const HandlegetInputs = (e) => {
  const { name, value } = e.target;
  filterdata ?  
  setgetSearch((data) => ({
   ...data, 
   [name]: value
 })) :
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
                            placeholdername={ filterdata ? filterdata.Title : item?.Title} 
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

  
