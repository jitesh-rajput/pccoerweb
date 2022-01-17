import React from "react";
import './Registeration.css';
import Header from "../constant/Header/Header";

class Registeration extends React.Component {
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
            <form>
                  <div className="mb-3">
                    <label for="Username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="Username" />
                  </div>
                  <div className="mb-3">
                    <label for="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="Password1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="Password1" />
                  </div>
                  <div className="mb-3">
                    <label for="Password2" className="form-label">Re-Enter Password</label>
                    <input type="password" className="form-control" id="Password2" />
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