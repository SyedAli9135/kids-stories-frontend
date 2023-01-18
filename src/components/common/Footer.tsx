import React from "react";
import cartoonImg from "../../assets/cartoon.jpg";
import instagramImg from "../../assets/instagram.png";
import facebookImg from "../../assets/facebook.png";
import twitterImg from "../../assets/twitter.png";
export const Footer: React.FC = () => {
  return (
    <div className="container container-fluid">
      <footer style={{ marginTop: "20px" }} className="py-5">
        <div
          style={{ marginLeft: "100px" }}
          className="row justify-content-center "
        >
          <div className="col-6 col-md-2 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Story
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
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

          <div className="col-md-5 offset-md-1 mb-3">
            <img height="200px" width="200px" src={cartoonImg} />
          </div>
        </div>

        <div
          style={{ marginLeft: "50px" }}
          className="d-flex flex-column flex-sm-row justify-content-between  border-top"
        >
          <p>© 2022 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
