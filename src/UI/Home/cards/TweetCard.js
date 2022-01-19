import userprofile from './../img/icons/user.png';
import pccoerimg from './../img/pccoer.jpg';

const TweetCard =()=>{

    return(
        <div className="py-3">
        <div className="row">
        <div className="col-sm-12 col-lg-6 m-auto">
            <div className="card text-dark">
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
            </div>
            </div>
            </div>
    )
}

export default TweetCard;