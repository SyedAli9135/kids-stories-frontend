import React from "react";
import { UserProfile } from "./UserProfile";
import { UserSearch } from "./UserSearch";
import magnifier from "../../../assets/magnifier.png";
import profile from "../../../assets/profile-user.png";
export const UserDashboard: React.FC = () => {
  return (
    <>
      <div className="container">
        <ul
          style={{ backgroundColor: "red", borderRadius: "20px" }}
          className="nav justify-content-center"
        >
          <li className="nav-item">
            <a
              style={{ color: "whitesmoke", fontSize: "20px" }}
              className="nav-link"
              href="#"
            >
              <img src={profile} style={{ height: "35px" }} /> Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "whitesmoke", fontSize: "20px" }}
              className="nav-link"
              href="#"
            >
              <img src={magnifier} style={{ height: "35px" }} /> Recent Searches
            </a>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <UserProfile />
      </div>
    </>
  );
};
