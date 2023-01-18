import React from "react";
import "./styles/navbar.css";
export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <a className="navbar-brand navbar__logo" href="#">
          LOGO
        </a>
        <button
          className="navbar-toggler navbar__toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar__responsive__menu">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Story
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Dashboard</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success navbar__btn__login"
              type="submit"
            >
              LOGIN
            </button>
            <button
              className="btn btn-outline-warning navbar__btn__signup"
              type="submit"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
