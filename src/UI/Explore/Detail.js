
import React, { useEffect, useState } from "react";
import Header from "../constant/Header/Header";
import ExploreCard from "./ExploreCard";
import firebase from "firebase";
import userprofile from "../Home/img/profile.png";
import { useParams } from "react-router-dom";

const Detail =(props) => {
  const params = useParams();
  return (
    <ShowDetail {...props} params={params} />
  );
}

class ShowDetail extends React.Component{
  componentDidMount(){
    console.log(this.props.params.id)
    console.log(this.props.params.type)

    const id=this.props.params.type
    firebase.firestore().collection('internships')
  .doc(id)
  .get().then(snapshot=>{
    console.log(snapshot.data())
    const data =snapshot.data()
    this.setState({detail:data})
})
  }
  constructor(){
    super()
    this.state={
      detail:[]
    }
  }
  render(){
    return(
<div>
      <Header/>
      <div className="container-fluid home-bg cardcss py-5">
        <div className="container pt-5 ">
            <h1>
                {this.state.detail.title}
            </h1>
            <img src={this.state.detail.pic} height={200}/>
            <h4>
                {this.state.detail.desc}
            </h4>
            <h5>
              {this.state.detail.apply_link}
            </h5>
          </div>
        </div>
      </div>
    )    
  }
  


}


  export default Detail;