import React from "react";
import Header from "../constant/Header/Header";
import userprofile from "../Home/img/profile.png";
import pccoerimg from '../Home/img/pccoer.jpg';

class Profile extends React.Component {
    render() {
      return (
      <div>
      <Header/>
      <div className="container-fluid home-bg cardcss">
        <div className="container-fluid pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-4 mt-3 py-2">
            <div className="text-center">
            <img src={userprofile} height={180}/>
            </div>
            <div className="px-5 py-3">
            <h6 className="px-5"> Username :- <span>some</span></h6>
            <h6 className="px-5"> Name</h6>            
            <h6 className="px-5"> Branch</h6>
            <h6 className="px-5" > Friend</h6>            
            <h6 className="px-5"> Bio</h6>
            <h6 className="px-5"> email</h6>
            <button className="m-3 px-5 btn py-2" >Edit</button>
            </div>
            </div>

            <div className="col-sm-12 col-lg-7 m-auto">
            <div className="py-3">
            <div className="card bg-dark">
              <div className="d-flex card-header">
                <img src={userprofile} height={30} />
                <h6 className="px-2 py-1">Username</h6>
              </div>
              <div className="card-body">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a>Go somewhere</a>
                <img src={pccoerimg} className="card-img-top" alt="..."/>
              </div>
              <div className="card-footer text-muted">
                2 days ago
              </div>
            </div>
            </div>
            </div>


            </div>
          </div>
          </div>
            
        <div className="container-fluid">
        <div className="row">
        
        </div>
        </div>
      </div>
      )
    }
  }

  export default Profile;

