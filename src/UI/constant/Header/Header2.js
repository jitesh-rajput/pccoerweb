import './Header.css'
import { Link } from "react-router-dom";

const Header2 =()=>{
    return(
        <div className="container-fluide header py-2">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand logo">
              PCCOER WEB
            </Link>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/login" className="nav-link active" href="www.google.com">
                    Login
                  </Link>
                </li>
              </ul>
          </div>
          </nav>
        </div>
      </div>
    )
}

export default Header2;