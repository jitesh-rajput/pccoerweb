import React from "react";
import './Registeration.css';
import Header from "../constant/Header/Header2";
import CheckLogin from "../../firebase/CheckLogin";
import Alert from "../constant/Alert";
import { Link, Navigate } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props)
      this.state={
        email:'',
        password:'',
        error:null,
      }
      this.loginUser=async(event)=>{
        event.preventDefault();
         this.setState({error: await CheckLogin(this.state)}) 
      }
  }
    render() {
      if(this.state.error=="Login"){
        console.log("Verified ..!");
        return (<Navigate to="/home" replace={true} />)
      }
      return(
          <div>
            <Header/>
            <div className="sign-bg">
            <div className="row py-4">
            <div className="text-center py-2">
                <h2>Login</h2>
            </div>

            { this.state.error? <Alert error={this.state.error}/> :''}

            <div className="col-10 col-sm-6 col-lg-4 m-auto">
            <form onSubmit={this.loginUser}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={event => this.setState({ email: event.target.value })}
                  />
                  <div id="emailHelp" className="form-text">We'll Never Share Your Email</div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
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