import React from "react";
import './Registeration.css';
import Header from "../constant/Header/Header2";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props){
    super(props)
      this.state={
        email:'',
        password:''
      }
  }
    render() {
      console.log(this.state)
      return(
          <div>
            <Header/>
            <div className="sign-bg">
            <div className="row py-4">
            <div className="text-center py-2">
                <h2>Login</h2>
            </div>
            <div className="col-10 col-sm-6 col-lg-4 m-auto">
            <form>
                <div className="mb-3">
                  <label for="Email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={event => this.setState({ email: event.target.value })}
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="Password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="Password" 
                  value={this.state.password}
                  onChange={event => this.setState({ password: event.target.value })}
                  />
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary my-2 mx-5">Submit</button>
                </div>
            </form>
          </div>
      </div>

      <div className="row text-center">
      <p className="text-decoration-none" to="" style={{color:" rgb(26, 236, 250)"}}>Forget Password ?</p>
      <Link to="/signup" className="text-decoration-none" to="/signup" style={{color:" rgb(26, 236, 250)"}}>Register </Link>
      </div>
    </div>
 </div>
        
)
}}

export default Login;