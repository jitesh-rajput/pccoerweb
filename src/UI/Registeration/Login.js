import React from "react";
import './Registeration.css';
import Header from "../constant/Header/Header2";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
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
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
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