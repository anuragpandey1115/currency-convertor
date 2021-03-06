import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="ciontainer">
              <a class="navbar-brand" href="/">Counter</a>
              <button className="navbar-toggler" type="button" 
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" aria-expanded="false" 
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Signin">Signin</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="Signup">Signup</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="Convertor">Convertor</Link>
                  </li>
                 
                </ul>

              </div>
           </div> 
        </nav>
      </div>   
      
    )
  }
}

export default Navbar;
