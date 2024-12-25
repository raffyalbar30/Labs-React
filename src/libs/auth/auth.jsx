 import { Outlet, Navigate } from "react-router-dom";

  const username = {
    email: "example@gmail.com",
    password: "password"

   }
   
const Auth = localStorage.getItem("auth");   

 export const Authentication = (Login) => {
    const { email, password } = Login;
    if (email === username.email && password === username.password) {
        localStorage.setItem("auth", JSON.stringify(Login));
    } else {
        console.log("Login Failed");
    }  
      if (Auth !== null) {
          alert("Login Success");
      } else {
          console.log("Login Failed");
      }
   }

   export const PrivateComponents = () => {
       return Auth !== null ?  <Outlet/> : <Navigate to="/Login" />;
   }