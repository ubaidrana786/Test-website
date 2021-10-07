<<<<<<< HEAD
// import React, { useState } from "react";
// // import fire from "./FireBaseAuth";
// // import withFirebaseAuth from 'react-with-firebase-auth'
// // import * as firebase from 'firebase/app';
// // import 'firebase/auth';
// // import firebaseConfig from './firebaseConfig';
// import "../index.css";
// import {
//   Button,
//   FormControl,
//   FormGroup,
//   Input,
//   InputLabel,
//   makeStyles,
// } from "@material-ui/core";
=======
import React, { useState } from "react";


import "../index.css";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
>>>>>>> 633a1bdc75e5453306896d0d77a8ea0f8a609173

// import { Link } from "react-router-dom";
// import { ErrorModel } from "./ErrorModel";
// const usestyle = makeStyles({
//   formwidth: {
//     width: "30%",
//     margin: "15% 0 0 35%",
//     "& > *": {
//       marginTop: "30px",
//     },
//   },
// });
// export default function Login() {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [error, seterror] = useState();
//   const [passerror, setpasserror] = useState();
//   const classes = usestyle();

<<<<<<< HEAD
//   const submit = async (e) => {
//     e.preventDefault();
//     // if (email.trim().length === 0 || password.trim().length === 0) {
//     //   seterror({
//     //     message: "please fill all field",
//     //   });
//     //   return;
//     // } else {
//     //   seterror("");
//     // }
// //     const auth = getAuth();
// // createUserWithEmailAndPassword(auth, email, password)
// //   .then((userCredential) => {
// //     alert("Login user success")
// //     const user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     alert("user not exist",error)
// //     // ..
// //   });

//     console.log(email, password);
//     setemail("");
//     setpassword("");
//   };
//   const emailchahgehandle = (e) => {
//     e.preventDefault();
//     setemail(e.target.value);
//   };
//   const passwordchahgehandle = (e) => {
//     e.preventDefault();
//     setpassword(e.target.value);
//   };
//   // const errorHandle = () => {
//   //   seterror(null);
//   // };
//   return (
//     <>
//       <FormGroup className={classes.formwidth}>
//         <FormControl>
//           <InputLabel>Email</InputLabel>
//           <Input
//             name="email"
//             value={email}
//             // onChange={(e) => setemail(e.target.value)}
//             onChange={emailchahgehandle}
//           />
//           {/* {error && <p> {error.message}</p>} */}
//         </FormControl>

//         <FormControl>
//           <InputLabel>password</InputLabel>
//           <Input
//             type="number"
//             name="password"
//             value={password}
//             // onChange={(e) => setemail(e.target.value)}
//             onChange={passwordchahgehandle}
//           />
//         </FormControl>
//         <Button 
//           variant="contained"
//           style={{ backgroundColor: "#57b846", color: "white" }}
//           onClick={submit}
//         >
//           Log In
//         </Button>
//         <Link to={"/signup"}>Create Account</Link>
//       </FormGroup>
//     </>
//   );
// }

import React, { useState } from 'react'
import { useHistory } from "react-router"
export const Login = (props) => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  let history = useHistory();
  const login = async (e)=>{
    e.preventDefault()
    console.warn(email,password)
    
     let item = {email,password}
    let result = await fetch("https://reqres.in/api/login",{
      method: "post",
      headers: {
        "content-type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(item),
    });
    result = await result.json()
    console.log(result)
    localStorage.setItem("login user", JSON.stringify(result) )
    props.onLogin(item);
    // history.push("/all");
  }
=======
  const submit = async (e) => {
    e.preventDefault();
    // if (email.trim().length === 0 || password.trim().length === 0) {
    //   seterror({
    //     message: "please fill all field",
    //   });
    //   return;
    // } else {
    //   seterror("");
    // }
 
    console.log(email, password);
    setemail("");
    setpassword("");
  };
  const emailchahgehandle = (e) => {
    e.preventDefault();
    setemail(e.target.value);
  };
  const passwordchahgehandle = (e) => {
    e.preventDefault();
    setpassword(e.target.value);
  };
  // const errorHandle = () => {
  //   seterror(null);
  // };
>>>>>>> 633a1bdc75e5453306896d0d77a8ea0f8a609173
  return (
    <div className="container mt-5">
       <form>
          <div class="mb-3">
            <label for="exampleInputEmail1"  class="form-label">Email address</label>
            <input type="email" class="form-control" name="user" id="exampleInputEmail1" onChange={(e) => setemail(  e.target.value )} />

          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" name="password" id="exampleInputPassword1" onChange={(e) => setpassword(  e.target.value )}  />
          </div>

          <button type="submit" onClick={login} class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

