import pccoerimg from '../Home/img/pccoer.jpg';
import userprofile from "../Home/img/profile.png";

 const TweetCard =()=>{
    return(
        <div className="card bg-dark">
              <div className="d-flex card-header">
                <img src={userprofile} height={30} />
                <h6 className="px-2 py-1">Username</h6>
              </div>
              <div className="card-body">
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a>Go somewhere</a>
                <img src={pccoerimg} className="card-img-top" alt="..."/>
              </div>
              <div className="card-footer text-muted">
                2 days ago
              </div>
            </div>
    )
}

export default TweetCard;