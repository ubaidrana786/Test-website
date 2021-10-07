import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { BrowserRouter, Route, Switch, Link, } from "react-router-dom";
import { useState } from "react";
import AllUser from "./components/AllUser";
import NotFound from "./components/NotFound";
import Update from "./components/Update";
import {Login} from "./components/Login";
import Signup from "./components/Signup";
import {NavbarMenu} from "./components/NavbarMenu"

function App() {
  const [Isloggedin, setIsloggedin] = useState(false)
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsloggedin(true);
  };
  return (
    <div className="App">
      {
       ! Isloggedin ?
       <Login onLogin={loginHandler} />
      :
     <BrowserRouter>
     <NavbarMenu/>
         <Switch>
           <Route exact path="/add">
             <AddUser />
           </Route>
           <Route exact path="/all">
             <AllUser />
           </Route>
           <Route exact path="/update/:id">
             <Update />
           </Route>
           <Route exact path="/login">
             <Login />
           </Route>
           <Route exact path="/signup">
             <Signup/>
           </Route>
 
           <Route exact path="/">
             <Home />
           </Route>
           <Route>
             <NotFound />
           </Route>
         </Switch>
       </BrowserRouter> 
      }
     


    </div>
  );
}


export default App;
