import React, { Component } from 'react'
import '../App.css'
class signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",



        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.emain}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            email: "",
            password: '',
        })
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="container1" >
                    <legend className="rit">Signin</legend>
                    <div className="main">
                        <label>Email:  </label>
                        <input className="inp" type="email" value={this.state.email} onChange={this.emailhandler} name="email address" required placeholder="enter your email" />
                    </div>
                    <div className="main">
                        <label>Password:  </label>
                        <input className="inp" type="password" value={this.state.password} onChange={this.passwordhandler} name="password" required placeholder="enter your password" />
                    </div>
                    <div className="inp2">Forgot Password?</div>
                    <div className="inp1">
                        <input className="inp1"
                            type="submit" value="Sign in"
                        />
                    </div>
                    <div className="inp3">
                        <a href="./Signup">Signup</a>
                    </div>
                </div>
                </form>
            </div >
        );
    }
}

export default signin
