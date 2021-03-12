import React, { Component } from 'react'
import './Signup.css';

export class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      UserName: "",
      email: "",
      password: "",
      Confirmpassword: "",



    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  firsthandler = (event) => {
    this.setState({
      UserName: event.target.value
    })
  }
  lasthandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  genderhandler = (event) => {
    this.setState({
      Confirmpassword: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert(`${this.state.UserName} ${this.state.email}  Registered Successfully !!!!`)
    console.log(this.state);
    this.setState({
      UserName: "",
      email: "",
      password: '',
      Confirmpassword: "",
    })
    event.preventDefault()
  }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="container2">
              <legend className="rit1">Signup</legend>
              <div className="main1">
                <label>UserName:</label>
                <input className="inpt" type="email" name="email address"
                  value={this.state.UserName} onChange={this.firsthandler} required placeholder="enter your username" />
              </div>
              <div className="main1">
                <label>Email</label>
                <input className="inpt" type="email" name="email address"
                  value={this.state.email} onChange={this.lasthandler} required placeholder="enter your email address" />
              </div>
              <div className="main">
                <label>Password:  </label>
                <input className="inpt" type="password" name="password"
                  value={this.state.password} onChange={this.passwordhandler} required="true" placeholder="enter your password" />
              </div>
              <div className="main1">
                <label>Confirm Password:  </label>
                <input className="inpt" type="password" name="password"
                  value={this.state.Confirmpassword} onChange={this.genderhandler} required="true" placeholder="enter your password again" />
              </div>
              <div className="inpt2">Forgot Password?</div>
              <div className="">
                <input className="inpt1"
                  type="submit" value="submit"
                />
              </div>
              {/* <div className="lh-copy mt3">
                 <a  href="./Signup">Signup</a>
              </div> */}
            </div>
          </form>
        </div>
      );
    }
  }

  export default Signup;
