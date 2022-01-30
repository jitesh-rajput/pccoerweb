import React from "react";
import Header from "../constant/Header/Header";
import BottomFooter from "./BottomFooter";

import './Feed.css'

class AddTweet extends React.Component {
    render() {
      return (
      <div>
      <Header/>
      <div className="container-fluid home-bg addtweetbg">
        <div className="container pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-6 m-auto mt-3 py-2 bg-dark rounded shadow-lg">
            <h4 className="text-center">Share Tweet</h4>
            </div>
          </div>
          </div>
        
        <div className="container">
        <div className="row py-4"> 
        <div className="col-sm-12 col-lg-6 m-auto">
            <div classNamme="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label"> Write Tweet</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
            <label for="formFile" className="form-label">Share Image </label>
            <input className="form-control" type="file" accept=".jpg,.gif,.png" id="formFile" />
            </div>
            <div className=" mb-3">
            <label for="basic-url" className="form-label">Add URL</label>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
            </div>
            <button type="submit" className=" my-3 btn btn-primary">Share Tweet</button>
        </div>
        </div>
        </div>

      </div>
      <BottomFooter/>
      </div>
      )
    }
  }

  export default AddTweet;