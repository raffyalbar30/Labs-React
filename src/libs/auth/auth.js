import { ImFileMusic } from "react-icons/im";

  const username = {
    email: "example@gmail.com",
    password: "password"

   }
   
 export const Authentication = (Login) => {
    const { email, password } = Login;
    if (email === username.email && password === username.password) {
        localStorage.setItem("auth", JSON.stringify(Login));
    } else {
        console.log("Login Failed");
    }

    const Auth = localStorage.getItem("auth");    
      if (Auth !== null) {
          alert("Login Success");
      } else {
          console.log("Login Failed");
      }
 }
