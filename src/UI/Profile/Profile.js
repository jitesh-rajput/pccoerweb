import React from "react";
import Header from "../constant/Header/Header";
import TweetCard from "../Home/cards/TweetCard";
import userprofile from "../Home/img/profile.png";
import firebase from "firebase";
import UpdateProfile from "./UpdateProfile";

class Profile extends React.Component {
  componentDidMount(){
    firebase.firestore().collection("users")
    .doc(sessionStorage.getItem("user"))
    .onSnapshot((snapshot)=>{
      this.setState({user:snapshot.data()})
    })

    firebase.firestore().collection("tweets")
    .where('uid',"==",sessionStorage.getItem("user"))
    .get().then(snapshot=>{
      let userpost = snapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        return { id, ...data }
    })
     this.setState({posts:userpost})
    })
  }
  constructor(){
    super()
    this.state={
      user:'',
      posts:[]
    }
  }
    render() {
      console.log(this.state.user)
      console.log(this.state.posts)
      return (
      <div>
      <Header/>
      <div className="container-fluid home-bg cardcss">
        <div className="container-fluid pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-4 mt-3 py-2 m-auto bg-dark text-white">
              <div className="text-center">
                <img src={this.state.user.profile_pic} height={180}/>
              </div>
              
              <div className="px-5 py-3">
                <h6 className="px-3"> Username :- <span>{this.state.user.username}</span></h6>
                <h6 className="px-5"> Name :- <span>{this.state.user.name}</span></h6>            
                <h6 className="px-5"> Branch :- <span>{this.state.user.branch}</span></h6>
                <h6 className="px-5" > Friend :- <span>12</span></h6>            
                <h6 className="px-5"> Bio :- <span>{this.state.user.bio}</span></h6>
                <h6 className="px-5"> email :- <span>{this.state.user.email}</span></h6>
                <h6 className="px-5"> website :- <span>{this.state.user.website}</span></h6>
                <div className="row">
                <div className="col-lg-5">
                  <UpdateProfile props={this.state.user}/>
                </div>
                <div className="col-lg-5" >
                <a className="col m-3 px-5 py-2 btn btn-primary" >LogOut</a>
                </div>

  <div
    className="offcanvas offcanvas-start bg-dark"
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        Update Profile
      </h5>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"/>
    </div>
    <div className="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </div>
    </div>
  </div>




                </div>
              </div>
            </div>
          </div>
          {this.state.posts.map(data=>(
            <TweetCard data={data} key={data.id}/>
           ))}


        </div>
      </div>
            
    </div>
      )
    }
  }
  export default Profile

