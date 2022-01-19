
import React from "react";
import Header from "../constant/Header/Header";
import BottomFooter from "./BottomFooter";

import './Feed.css';
import StudentCard from "./cards/StudentCard";

class StudentPanel extends React.Component {
    render() {
      return (
      <div>
      <Header/>
      <div className="container-fluid home-bg cardcss">
        <div className="container pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-6 text-center m-auto mt-3 py-2 bg-dark rounded shadow-lg">
            <div classNamme="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Placed Student
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" >Top Placed Students</a></li>
                <li><a className="dropdown-item" >2021 - Toppers</a></li>
                <li><a className="dropdown-item" ></a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" >Recent Compition Winners</a></li>
            </ul>
            </div>
            </div>
          </div>
          </div>
            
        <div className="container">
        <div className="row">
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        <StudentCard/>
        </div>
        </div>
      </div>
      <BottomFooter/>
      </div>
      )
    }
  }

  export default StudentPanel;