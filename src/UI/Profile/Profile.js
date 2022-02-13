import React from "react";
import Header from "../constant/Header/Header";
import TweetCard from "../Home/cards/TweetCard";
import userprofile from "../Home/img/profile.png";
// Here We use Home tweet card later we edit this to our tweet card..
class Profile extends React.Component {
    render() {
      return (
      <div>
      <Header/>
      <div className="container-fluid home-bg cardcss">
        <div className="container-fluid pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-4 mt-3 py-2 m-auto">
            <div className="text-center">
            <img src={userprofile} height={180}/>
            </div>
            <div className="px-5 py-3">
            <h6 className="px-5"> Username :- <span>Username</span></h6>
            <h6 className="px-5"> Name :- <span>Name</span></h6>            
            <h6 className="px-5"> Branch :- <span>Computer Engg</span></h6>
            <h6 className="px-5" > Friend :- <span>12</span></h6>            
            <h6 className="px-5"> Bio :- <span>Nothing to Share Here</span></h6>
            <h6 className="px-5"> email :- <span>email@gmail.com</span></h6>
            <button className="m-3 px-5 btn py-2" >Edit</button>
            </div>
            </div>

            <div>
            <TweetCard/>
            <TweetCard/>
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

