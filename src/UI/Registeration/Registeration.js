import React from "react";
import './Registeration.css';
import Header from "../constant/Header/Header2";
import CreateUser from "../../firebase/CreateUser";

class Registeration extends React.Component {
    constructor(){
      super()
      this.state={
        username:'',
        name:'',
        email:'',
        password1:'',
        password2:'',
        error:''
      }
      this.createAccount=(event)=>{
        event.preventDefault();
        <CreateUser data={this.state} />
      }
    }
    render() {
      return(
          <div>
            <Header/>
            <div className="sign-bg">
        <div className="row py-2">
            <div className="text-center py-2">
              <h2>Sign Up</h2>
            </div>
            <div className="col-10 col-sm-6 col-lg-4 m-auto">
            <form onSubmit={this.createAccount}>
                  <div className="mb-3">
                    <label for="Username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="Username"
                    value={this.state.username}
                    onChange={(event) => this.setState({ username: event.target.value })}
                     />
                  </div>
                  <div className="mb-3">
                    <label for="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                     />
                  </div>
                  <div className="mb-3">
                    <label for="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={(event) => this.setState({ email: event.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="Password1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="Password1"
                    value={this.state.password1}
                    onChange={(event) => this.setState({ password1: event.target.value })}
                   />
                  </div>
                  <div className="mb-3">
                    <label for="Password2" className="form-label">Re-Enter Password</label>
                    <input type="password" className="form-control" id="Password2"
                    value={this.state.password2}
                    onChange={(event) => this.setState({ password2: event.target.value })}
                    />
                  </div>
                  <div className="text-center">
                  <button type="submit" className="btn btn-primary my-2 mx-5 px-5 py-2">Submit</button>
                  </div>
                </form>
            </div>
        </div>
      </div>

          </div>
        
)
}}

export default Registeration;