import React from 'react'
import Header from "../constant/Header/Header";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
import firebase from "firebase" ;
import DetailCard from './DetailCard';

const Detail =(props) => {
  const params = useParams();
  console.log(params)
    if((params.branch==="CS" || params.branch==="EE" || params.branch==="CE" || params.branch==="E&TC") && (params.sem==="1" || params.sem==="2" || params.sem==="3" || params.sem==="4"||params.sem==="5" || params.sem==="6" || params.sem==="7" || params.sem==="8") ){
        return(
        <ShowDetail {...props} params={params} />
        )
    }
    else {
        return(
            <h1 className='text-center'>404</h1>
        )
    }
}


class ShowDetail extends React.Component{
    componentDidMount(){
        console.log(this.props.params.branch)
        firebase.firestore().collection("syllabus")
        .where("branch","==",`${this.props.params.branch}`)
        .where("sem","==",`${this.props.params.sem}`)
        .get().then(snapshot=>
        {
        let data =snapshot.docs.map(doc=>{
        const data=doc.data();
        const id=doc.id;
        return {id,...data}
        })
        console.log(data)
        this.setState({subjects:data})
        }
        )
    }
    constructor(){
        super()
        this.state={
            subjects:[]
        }
    }
    render()
    {
        console.log(this.state.subjects)
        return(
            <>
            <Header/>
            <div className="container-fluid home-bg cardcss py-5">
            <div className="container py-5">
            <h1 className="py-4 text-center text-uppercase"> Sem Syllabus</h1>
            {this.state.subjects.map(data=>(
            <DetailCard data={data} key={data.id}/>
           ))} 
            </div>
            </div>
            </>
        )
        }
}
export default Detail;