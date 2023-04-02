import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="container my-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Phone Directory
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Tümünü Listele
                </Link> 
              </li> 
              <li className="nav-item">
                <Link to={"/new-contact"} className="nav-link">
                  Yeni Kayıt
                </Link>
              </li>
			  <li className="nav-item">
                <Link className="nav-link">
                  Arama
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
