import React, { useState } from 'react'
import Inputs from '../../../components/inputs'
import Button from '../../../components/Button'
import Labels from '../../../components/Labels'
import { Authentication } from '../../../libs/auth/auth'



 export default function Formlogin() {
  const [ Login, setLogin ] = useState("");

  const HandleOnchange = (e) => {
      setLogin((prev) => ({
        ...prev,
         [e.target.name]: e.target.value
        }))
  }

   
  const HandleFormLogin = (e) => { 
     try {
       Authentication(Login);
     } catch (error) {
      
     }
    
  }



  return (
    <div className='w-full h-auto p-24 flex-wrap'>
        <p className="text-left text-[30px] mb-4 float-left font-semibold ml-8 mt-4 text-blue-900"> Login Bang !!</p>
        <div className='w-full border p-8 h-[350px] rounded-md'>
          <div className='flex-wrap '>
            <Inputs name={"email"} placeholderurl={"example@gmail.com"} onChange={HandleOnchange} className={`w-full mt-2 p-1 border border-blue-400 rounded-md`}/>
             <Inputs name={"password"} placeholderurl={"your password "} onChange={HandleOnchange} className={`w-full mt-2 p-1 border border-blue-400 rounded-md`}/>
               <div className='w-full mt-2 pt-4 pb-4 flex justify-between'>
                    <Labels classname={`text-[15px] font-semibold`}>you don't have an account ?</Labels>
                    <Labels classname={`text-[15px] font-semibold`}> Forget password ?</Labels>
               </div>
                <Button className={`bg-blue-800 mt-2 w-full text-[20px] p-1 float-left text-white rounded-md`} onClick={HandleFormLogin}>Sign In </Button>
                 <Button className={`bg-red-400 mt-2 w-full text-[20px] p-1  float-left text-white rounded-md`}>Sign up </Button>
          </div>
        </div>
      </div>
  )
}
