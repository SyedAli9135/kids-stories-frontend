import React from "react";
import "./styles/navbar.css";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3  bg-white rounded navbar__background__gradient">
      <div className="container-fluid navbar__container__main">
        <a
          style={{ color: "whitesmoke", fontWeight: "bolder" }}
          className="navbar-brand navbar__logo"
          href="#"
        >
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
            <li className="nav-item ">
              <Link to="/">
                <a
                  className="nav-link active navbar__menu"
                  aria-current="page"
                  href="#"
                >
                  <button>Home</button>
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="story">
                <a className="nav-link active navbar__menu" href="#">
                  <button> Story</button>
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link active dropdown-toggle navbar__menu"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <button>About Us</button>
              </a>
              <ul className="dropdown-menu navbar__dropdown1">
                <li>
                  <Link to="about">
                    <a
                      className="dropdown-item navbar__menu__dropdowncolor"
                      href="#"
                    >
                      <button>About Us</button>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="contact">
                    <a
                      className="dropdown-item navbar__menu__dropdowncolor"
                      href="#"
                    >
                      <button>Contact Us</button>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item  ">
              <Link to="userdashboard">
                <a className="nav-link active navbar__menu" href="#">
                  <button> Dashboard</button>
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown navbar__dropdown__user">
              <a
                className="nav-link active dropdown-toggle navbar__menu"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={user} height="30px" width="30px" />
              </a>
              <ul className="dropdown-menu navbar__dropdown__user">
                <li>
                  <Link to="login">
                    <a
                      className="dropdown-item navbar__menu__dropdowncolor__user"
                      href="#"
                    >
                      <button>Login</button>
                    </a>
                  </Link>
                </li>

                <li>
                  <a
                    className="dropdown-item navbar__menu__dropdowncolor__user"
                    href="#"
                  >
                    <button>Logout</button>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
