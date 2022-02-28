import React from "react";
import Header from "../constant/Header/Header";
import BottomFooter from "./BottomFooter";
import ShareTweet from "../../firebase/ShareTweet";
import firebase from "firebase";
import './Feed.css'

import { connect } from 'react-redux';

class AddTweet extends React.Component {
    componentDidMount(){
      console.log(this.props)
      if(!sessionStorage.getItem("user")){
        return "404"
      }
    }

    constructor(props){
      super(props)
      console.log(props.user)
      this.state={
        caption:'',
        img:'',
        url:'',
        error:'',
        username:props.user.username ,
        profile:props.user.profile_pic,
        error:'',
        upload:false
      }
    }
    
    render() {
      const Share=async(e)=>{
        e.preventDefault();
        this.setState({error: ShareTweet(this.state)})
        console.log(this.state.error)
      }
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
        {this.state.error==="Post Uploaded" ?
        <div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
      :'' }
        <div className="col-sm-12 col-lg-6 m-auto">
            <form onSubmit={Share}>
            <div className="mb-3">
            <label className="form-label"> Write Tweet</label>
            <textarea className="form-control" rows="3"
            value={this.state.caption}
            onChange={event => this.setState({ caption: event.target.value })}
            ></textarea>
            </div>
            <div className="mb-3">
            <label className="form-label">Share Image </label>
            <input className="form-control" type="file" accept=".jpg,.gif,.png" 
              onChange={event=>this.setState({img:event.target.files[0]})}
            />
            </div>
            <div className=" mb-3">
            <label className="form-label">Add URL</label>
            <input type="text" className="form-control" aria-describedby="basic-addon3"
              value={this.state.url}
              onChange={event=>this.setState({url:event.target.value})}
            />
            </div>
            <button type="submit" className=" my-3 btn btn-primary">Share Tweet</button>
            </form>
        </div>
        </div>
        </div>

      </div>
      <BottomFooter/>
      </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {user:state.userState.currentUser}
  }
  
  export default connect(mapStateToProps)(AddTweet)