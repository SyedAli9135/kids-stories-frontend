import React from "react";
import cartoonImg from "../../assets/cartoon.jpg";
import instagramImg from "../../assets/instagram.png";
import facebookImg from "../../assets/facebook.png";
import twitterImg from "../../assets/twitter.png";
import "./styles/footer.css";
import { Link } from "react-router-dom";
export const Footer: React.FC = () => {
  return (
    <div className="container container-fluid">
      <footer className="py-5 footer__container">
        <div className="row justify-content-center ">
          <div className="col-6 col-md-2 mb-3 justify-content-center footer__container__content1">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/">
                  <a href="#" className="nav-link p-0 text-muted footer__link">
                    <button>Home</button>
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-2 ">
                <Link to="story">
                  <a href="#" className="nav-link p-0 text-muted footer__link">
                    <button> Story</button>
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-2 ">
                <Link to="about">
                  <a href="#" className="nav-link p-0 text-muted footer__link">
                    <button>About Us</button>
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-2 ">
                <Link to="contact">
                  <a href="#" className="nav-link p-0 text-muted footer__link">
                    <button>Contact Us</button>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-3 footer__container__content2">
            <h5>Follow Us on Social Media</h5>
            <ul className="nav flex-row ">
              <img
                style={{ marginRight: "10px" }}
                src={facebookImg}
                height="30px"
                width="30px"
              />
              <img
                style={{ marginRight: "10px" }}
                src={instagramImg}
                height="30px"
                width="30px"
              />
              <img src={twitterImg} height="30px" width="30px" />
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 footer__container__content3">
            <img height="200px" width="200px" src={cartoonImg} />
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-center  border-top footer__copyright__text">
          <p>© 2022 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
