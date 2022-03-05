import React from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";

class UpdateProfile extends React.Component {
  componentDidMount(){
    firebase.firestore().collection("users")
    .doc(sessionStorage.getItem("user"))
    .onSnapshot((snapshot)=>{
      const data=snapshot.data()
      this.setState({username:data.username,name:data.name,branch:data.branch,bio:data.bio,website:data.website,img:data.profile_pic})
      console.log(this.state)
    })
  }

  constructor(props){
    super(props)
    this.state={
      //user:[],
      username:"",
      name:"",
      branch:"",
      bio:"",
      img:"",
      new_pic:'',
      website:"",
      error:""
    }
  }
  render() {
    const update=(e)=>{
      e.preventDefault()

      if(this.state.new_pic){
      
        // firebase.storage().refFromURL(`${this.state.img}`).delete().then(()=>{console.log("Deleted..")})
        // .catch((err)=>{
        //   console.log(err)
        // })
        const imgUrl = `profile/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
        const fileMetaData = { contentType: 'image/jpeg' };
    
        const task = firebase.storage().ref(imgUrl)
        const uploadTask = task.put(this.state.new_pic,fileMetaData);
        uploadTask.on("state_changed",console.log(),console.error(),()=>{
            task.getDownloadURL()
            .then((link)=>{
                console.log(link)
                this.setState({"img":link})
                console.log("Profile uploaded");
                firebase.firestore()
                .collection('users')
                .doc(sessionStorage.getItem("user"))
                .update(
                    {
                        uid:firebase.auth().currentUser.uid,
                        profile_pic: this.state.img,
                        username: this.state.username,
                        name: this.state.name,
                        bio: this.state.bio,
                        website:this.state.website,
                        branch:this.state.branch
                    }
                )
                .then(function () {
                    console.log("Data Updated");
                }
                )
            })
        })
    
    }
    else{
      console.log(this.state)
        firebase.firestore()
        .collection('users')
        .doc(sessionStorage.getItem("user"))
        .update(
            {
                uid:firebase.auth().currentUser.uid,
                profile_pic: this.state.img,
                username: this.state.username,
                name: this.state.name,
                bio: this.state.bio,
                website:this.state.website,
                branch:this.state.branch
            }
        )
        .then(function () {
            console.log("Data Updated");
            // return "Post Uploaded"
        }
        )
}
}
      return (
      <div>
        <a
            className=" col m-3 px-5 py-2 btn btn-primary"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
        >
        EDIT
        </a>
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
    <div className="offcanvas-body row">
      <div className="col-10 col-lg-10 m-auto">
      <form onSubmit={update}>
                <div className="text-center">
                <img className="m-auto rounded-circle" src={this.state.img} height={100} width={100} />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="file" accept=".jpg,.gif,.png" 
                    onChange={event=>this.setState({new_pic:event.target.files[0]})}
                    />
                </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="Username"
                    value={this.state.username}
                    onChange={(event) => this.setState({ username: event.target.value })}
                    required
                     />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                    required
                     />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Branch</label>
                    <input type="text" className="form-control" id="Branch"
                    value={this.state.branch}
                    onChange={(event) => this.setState({ branch: event.target.value })}
                    required
                     />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <input type="text" className="form-control" id="bio"
                    value={this.state.bio}
                    onChange={(event) => this.setState({ bio: event.target.value })}
                    required
                     />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Website</label>
                    <input type="text" className="form-control" id="Branch"
                    value={this.state.website}
                    onChange={(event) => this.setState({ website: event.target.value })}
                     />
                  </div>
                  
                  <div className="text-center">
                  <button disabled={this.state.loading} type="submit" className="btn btn-primary my-2 mx-5 px-5 py-2">Update</button>
                  <div className="row">
                    <div className=" col-10">
                    <Link className="m-3 px-5 btn btn-primary" to="/forgetpassword" >Reset Password</Link>
                    </div>
                    </div>
                  </div>
                </form>
      </div>
    </div>
  </div>

            
    </div>
      )
    }
  }
  export default UpdateProfile

