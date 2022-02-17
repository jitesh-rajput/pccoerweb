import React from "react";
import firebase from "firebase";
import userprofile from "../Home/img/profile.png";

class UpdateProfile extends React.Component {
  // componentDidMount(){
  //   firebase.firestore().collection("users")
  //   .doc(sessionStorage.getItem("user"))
  //   .onSnapshot((snapshot)=>{
  //     this.setState({user:snapshot.data()})
  //   })

  //   firebase.firestore().collection("tweets")
  //   .where('uid',"==",sessionStorage.getItem("user"))
  //   .get().then(snapshot=>{
  //     let userpost = snapshot.docs.map(doc => {
  //       const data = doc.data();
  //       const id = doc.id;
  //       return { id, ...data }
  //   })
  //    this.setState({posts:userpost})
  //   })
  // }


  constructor(props){
    super(props)
    this.state={
      username:this.props.props.username,
      name:this.props.props.name,
      branch:this.props.props.branch,
      bio:this.props.props.bio,
      img:this.props.props.profile_pic,
      website:this.props.props.website,
      error:''
    }
    this.update=(e)=>{
        e.preventDefault()
        if(this.state.username===""){ this.setState({username:this.props.props.username})}
        if(this.state.name===""){ this.setState({name:this.props.props.name})}
        if(this.state.branch===""){ this.setState({branch:this.props.props.branch})}
        if(this.state.bio===""){ this.setState({bio:this.props.props.bio})}
        if(this.state.img===""){ this.setState({img:this.props.props.img})}
        if(this.state.website===""){ this.setState({website:this.props.props.website})}

        firebase.firestore()
        .collection('users')
        .doc(sessionStorage.getItem("user"))
        .update(
            {
                //uid:firebase.auth().currentUser.uid,
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
    render() {
        console.log(this.props)
      console.log(this.state)
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
      <div className="col-8 col-lg-8 m-auto">
      <form onSubmit={this.update}>
                <div className="text-center">
                <img className="m-auto" src={this.state.img} height={80}/>
                </div>
                <div className="mb-3">
                    <input className="form-control" type="file" accept=".jpg,.gif,.png" 
                    onChange={event=>this.setState({img:event.target.files[0]})}
                    />
                </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="Username"
                    value={this.state.username}
                    onChange={(event) => this.setState({ username: event.target.value })}
                     />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                     />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Branch</label>
                    <input type="text" className="form-control" id="Branch"
                    value={this.state.branch}
                    onChange={(event) => this.setState({ branch: event.target.value })}
                     />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Bio</label>
                    <input type="text" className="form-control" id="bio"
                    value={this.state.bio}
                    onChange={(event) => this.setState({ bio: event.target.value })}
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

