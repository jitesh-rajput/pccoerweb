import React from "react";
import Header from "../constant/Header/Header";
import BottomFooter from "./BottomFooter";
import './Feed.css'
import FriendCard from "./cards/FriendCard";

class AddFriend extends React.Component {
    render() {
      return (
      <div>
      <Header/>
      <div className="container-fluid home-bg addtweetbg">
        <div className="container pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-6 m-auto mt-3 py-2 bg-dark rounded shadow-lg">
            <h4 className="text-center">Explore Your Network</h4>
            </div>
          </div>
          </div>
        
        <div className="container-fluid">
        <FriendCard/>
        <FriendCard/>
        </div>

      </div>
      <BottomFooter/>
      </div>
      )
    }
  }

  export default AddFriend;