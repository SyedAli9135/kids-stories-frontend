import React from "react";
import { UserProfile } from "./UserProfile";
import { UserSearch } from "./UserSearch";
import magnifier from "../../../assets/magnifier.png";
import profile from "../../../assets/profile-user.png";
import { Link, useLocation, Routes, Route } from "react-router-dom";

export const UserDashboard: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <ul
          style={{ backgroundColor: "red", borderRadius: "20px" }}
          className="nav justify-content-center"
        >
          <li className="nav-item">
            <Link to="userprofile">
              <a
                style={{ color: "whitesmoke", fontSize: "20px" }}
                className="nav-link"
                href="#"
              >
                <img src={profile} style={{ height: "35px" }} /> Profile
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="usersearch">
              <a
                style={{ color: "whitesmoke", fontSize: "20px" }}
                className="nav-link"
                href="#"
              >
                <img src={magnifier} style={{ height: "35px" }} /> Recent
                Searches
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index element={<UserProfile />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="usersearch" element={<UserSearch />} />
      </Routes>
    </>
  );
};
