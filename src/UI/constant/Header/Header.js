import './Header.css'
const Header =()=>{
    return(
        <div className="container-fluide header py-2">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="www.google.com">
              PCCOER WEB
            </a>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="www.google.com">
                    Login
                  </a>
                </li>
              </ul>
          </div>
          </nav>
        </div>
      </div>
    )
}

export default Header;