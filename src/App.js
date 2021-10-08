import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AllUser from "./components/AllUser";
import Update from "./components/Update";
import { Login } from "./components/Login";

import { NavbarMenu } from "./components/NavbarMenu";
import Protected from "./components/Protected";
function App(props) {
  return (
    <div className="App">

      <BrowserRouter>
      <NavbarMenu/>
        <Switch>
          <Route exact path="/add">
            <Protected comp={AddUser} />
          </Route>
          <Route exact path="/all">
            <Protected comp={AllUser} />
          </Route>
          <Route exact path="/update/:id">
            <Protected comp={Update} />
          </Route>
          <Route exact path="/update/:id">

            <Protected comp={Update} />
          </Route>
          <Route exact path="/login">

          <Login/>
          
          </Route>
 


          <Route exact path="/">

            <Protected comp={Home} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
