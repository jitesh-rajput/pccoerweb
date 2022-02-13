import userprofile from './../img/icons/user.png';
import pccoerimg from './../img/pccoer.jpg';

const TweetCard =(data)=>{
    data=data.data
    return(
        <div className="py-3">
        <div className="row">
        <div className="col-sm-12 col-lg-6 m-auto">
            <div className="card bg-dark">
              <div className="d-flex card-header">
                <img src={data.profile} height={30} />
                <h6 className="px-2 py-1">{data.username}</h6>
              </div>
              <div className="card-body">
                <p className="card-text">{data.caption}</p>
                <a>{data.url}</a>
                <img src={data.post} className="card-img-top" alt="..."/>
              </div>
              <div className="card-footer text-muted">
                {data.creation.seconds}
              </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default TweetCard;