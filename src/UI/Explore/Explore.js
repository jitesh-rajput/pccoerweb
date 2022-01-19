
import React from "react";
import Header from "../constant/Header/Header";
import ExploreCard from "./ExploreCard";


class Explore extends React.Component {
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
                Compition's
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item active" >Compition's </a></li>
                <li><a className="dropdown-item" >Internships </a></li>
                <li><a className="dropdown-item" >Freelancing</a></li>
                <li><hr className="dropdown-divider"/> </li>
                <li><a className="dropdown-item" >Part Time Jobs</a></li>
            </ul>
            </div>
            </div>
          </div>
          </div>
            
        <div className="container-fluid">
        <div className="row">
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
        </div>
        </div>
      </div>
      </div>
      )
    }
  }

  export default Explore;