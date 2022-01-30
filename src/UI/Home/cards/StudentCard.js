import userprofile from './../img/icons/user.png';
import profile from './../img/profile.png';

const StudentCard =()=>{
    return(
        <div className="col-sm-6 col-lg-4 py-3">
        <div className="card bg-dark ">
            <div className="card-header">
            <div className="d-flex">
                <img src={userprofile} height={35} /> 
                <h6 className="px-2 py-1">Username</h6>
            </div>
            </div>
            <div className="card-body text-center">
                <img src={profile} height={200} />
                <p className="card-text">Infosys || Computer Engg</p>
            </div>
            <div className="card-footer">
            <div className="d-flex justify-content-between">
                <h6 className="fw-bold">12 LPA</h6>
                <button className="btn py-2" >Connect</button>
            </div>
            </div>
            </div>
        </div>
    )
}
export default StudentCard;