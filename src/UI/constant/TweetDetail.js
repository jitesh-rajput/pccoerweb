import React from "react";
import Header from "./Header/Header";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import like from './../Home/img/icons/like.png'
import { Link } from "react-router-dom";
const TweetDetail =(props) => {
    const params = useParams();
      return(
          <Deatail {...props} params={params} />
      )
  }

class Deatail extends React.Component{
    componentDidMount(){
        const id=this.props.params.id
        firebase.firestore()
        .collection("tweets")
        .doc(`${id}`)
        .onSnapshot((snapshot) => {
            let data = snapshot.data();
            this.setState({post:data })
            console.log(this.state.post)
        })
    }
    constructor(){
        super()
        this.state={
            post:[]
        }
    }
    render(){
        return(
            <div className="pt-5">
                <Header/>
                <div className="home-bg cardcss pt-5">
                <div className="pt-5">
                <div className="px-3">
                <div className="row">
                <div className="col-sm-12 col-lg-6 m-auto">
                    <div className="card bg-dark">
                    <div className="d-flex card-header">
                        <img src={this.state.post.profile} height={30} />
                        <Link to={`/profile/${this.state.post.uid}`} className="link text-white text-decoration-none">
                        <h5 className="px-2 py-1">{this.state.post.username}</h5>
                        </Link>              
                        </div>
                    <div className="card-body">
                        <p className="card-text">{this.state.post.caption}</p>
                        <a>{this.state.post.url}</a>
                        {this.state.post.post ?
                        <img src={this.state.post.post} className="card-img-top"  height={400} width={500}/> :''}
                    </div>
                    <div className="card-footer text-muted">
                        <div className='row'>
                        <div className='col-2 text-center'>
                        <img src={like} height={30} />
                        </div>
                        <div className='col-2'>
                            <p>10</p>
                        </div>
                        <div className='col-4 text-center'>
                        <p>See More..</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default TweetDetail;