
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import Dashboard from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';

 export const userContext=createContext();

function App() {
  
   const [loggedInUser,setLoggedInUser]=useState({})
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
       

<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Fresh-Valley</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/addProduct">Admin</Nav.Link>
      <Nav.Link href="/login">login</Nav.Link>
      <Nav.Link href="/order/:Id">Order</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <p>{loggedInUser.name}</p>

       <Router>
      <div>
       
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/dashboard">
          <Dashboard/>
    
          
          </Route>
          <Route path="/addProduct">
          <AddProduct/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/order/:Id">
            <Order/>
            
          </PrivateRoute>
        </Switch>
      </div>
    </Router>

    </userContext.Provider>
    </div>
  );
}

export default App;
