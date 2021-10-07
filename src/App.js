import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import AllUser from "./components/AllUser";
import NotFound from "./components/NotFound";
import Update from "./components/Update";
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import { NavbarMenu } from "./components/NavbarMenu";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <NavbarMenu />
        <Switch>
          <Route exact path="/add">
            {/* <AddUser /> */}
            <Protected comp={AddUser} />
          </Route>
          <Route exact path="/all">
            {/* <AllUser /> */}
            <Protected comp={AllUser} />
          </Route>
          <Route exact path="/update/:id">
            {/* <Update /> */}
            <Protected comp={Update} />
          </Route>
          <Route exact path="/home">
          {/* <Home /> */}
            <Protected comp={Home} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
         

          <Route exact path="/">
            
            <Login />
          </Route>
          {/* <Route>
            <NotFound />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
