import companyprofile from "../Home/img/icons/office.png";

const ExploreCard =()=>{
    return(
        <div className="row py-3"> 
        <div className="col-sm-12 col-lg-6 m-auto">
        <div class="card text-dark">
        <div class="card-body">
                <div className='d-flex'>
                <img src={companyprofile} height={50} /> 
                <h6 className="px-2 py-1 fw-bold">Infosys Offere Internship for 2023 Passout</h6>
                </div>
                <div className="d-flex justify-content-between pt-2">
                <p>Small Description Here </p>
                <button className="btn py-2" >Apply</button>
                </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default ExploreCard;