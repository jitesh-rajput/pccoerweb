import React from "react";
import './Landing.css';
import profile from './img/profile.png'
import graduate from './img/graduates.png'
import scholarship from './img/scholarship.png'
import Header from "../constant/Header/Header";
class Landing extends React.Component {
    render() {
      return(
<div>
        <Header/>
      <div className="container-fluide">
      <div className="bg">
      <div>
      <h2 className="heading">
          Welcome
          <br/>
          To  
          <br/>
          <span>PCCOER WEB</span>
      </h2>
      </div>
      </div>
      </div>

      <div className="container-fluid">
        <h2 className="text-center py-4 headline">Features</h2>
        <div className="container">
          <div className="row py-5">
          <div className="col-sm-6 text-center">
            <img src={profile} className="img-fluid" style={{height: 200}}/>
          </div>
          <div className="col-sm-6">
            <h3 class="font-weight-bold py-2">Get In Touch With PCCOER Alumni ... </h3>
            <h5 className="py-3">
                Improve Your Profile With Alumni...... <br/>
                Builde Your Professional Connection........  
            </h5>
          </div>
          </div>
        </div>
        </div>

        <div className="container-fluid bg-dark text-white">
        <div className="container">
          <div className="row py-5">
          <div className="col-sm-6">
          <h3 class="font-weight-bold py-2">
          Get Roadmap of your B.E Journey .... </h3>
          <h5 className="py-3">
          Here you will get syllabus copy of your all
          semester . Notes for all semester from
          specialized teachers and Reference Book
            </h5>
          </div>
          <div className="col-sm-6 text-center">
            <img src={scholarship} className="img-fluid" style={{height: 200}}/>
          </div>
          </div>
        </div>
        </div>

        <div className="row py-5">
        <div className="col-sm-6 text-center">
          <img src={graduate} className="img-fluid" style={{height: 200}}/>
        </div>
        <div className="col-sm-6">
          <h3 class="font-weight-bold py-2">
          Get Internships ,Jobs and Competition.</h3>
          <h5 className="py-3">
          Here you can get internships , jobs and competition.
          </h5>
        </div>
        </div>

        <div className="container-fluid bg-dark">
        <h2 className="text-center py-4 headline">About US</h2>
        <div className="container text-white">
          <div className="row py-5">
          <div className="col-sm-6">
            <h2>PCCOER</h2>
            <h5 className="py-2">https://www.pccoer.com</h5>
            <h6>
            PCP, PCCOE and SBPIM are operational in Pradhikaran, Nigdi, in
            more than 10 Acres of land and having more than 4500 students on board.
            </h6>
            <h5 className="py-2">pccoer.ravet@gmail.com</h5>
          </div>
          <div className="col-sm-6">
            <h2>DEVELOPED BY</h2>
            *
          </div>
          </div>
        </div>
        </div>
        
</div>
      );
    }
  }

  export default Landing;