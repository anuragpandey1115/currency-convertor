 import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Convertor from './Components/Convertor';



function App() {


  return (
    <Router>
      <div>
        <div className="yes">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signin" component={Signin} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Convertor" component={Convertor} />
        </Switch>
       
      </div> 
      </Router>
  );




}

export default App;
