import React from "react";
import Header from "../constant/Header/Header";
import BottomFooter from "./BottomFooter";
import { Link } from 'react-router-dom';
import './Feed.css'
import TweetCard from "./cards/TweetCard";
import firebase from "firebase";
import { setUser} from "../../redux/actions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class Feed extends React.Component {
    componentDidMount(){
      this.props.setUser()
    // Fetch user Posts 
     firebase.firestore()
            .collection("tweets")
            .orderBy("creation","desc").limit(30)
            .onSnapshot((snapshot) => {
                let allpost = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                console.log(allpost)
                this.setState({ post: allpost })
            })
    } 
    constructor(){
      super()
      this.state={
        post:[]
      }
    }
    render() {
      console.log(this.state.post)
      return (
      <div>
      <Header/>
      <div className="container-fluid home-bg">
        <div className="container pt-5 ">
          <div className="row pt-5 pb-2">
            <div className="col-sm-12 col-lg-6 m-auto mt-3 py-2 bg-dark rounded shadow-lg">
            <h4 className="text-center">Tweets</h4>
            </div>
          </div>
          </div>
           {this.state.post.map(data=>(
             <TweetCard data={data} key={data.id}/>
           ))}     
      </div>
      <BottomFooter/>
      </div>
      )
    }
  }


 const mapDispatchProps = (dispatch) => bindActionCreators({ setUser }, dispatch);
 export default connect(mapDispatchProps, mapDispatchProps)(Feed);
//export default Feed;