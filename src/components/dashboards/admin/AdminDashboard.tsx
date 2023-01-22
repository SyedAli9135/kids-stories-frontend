import React from "react";
import magnifier from "../../../assets/magnifier.png";
import profile from "../../../assets/profile-user.png";
import group from "../../../assets/group.png";
import { AdminProfile } from "./AdminProfile";
import { AdminUsersList } from "./AdminUsersList";
import { AdminSearchDetails } from "./AdminSearchDetails";
import { Routes, Route, Link } from "react-router-dom";
export const AdminDashboard: React.FC = () => {
  return (
    <>
      <div>
        <ul
          style={{ backgroundColor: "whitesmoke", borderRadius: "20px" }}
          className="nav justify-content-center"
        >
          <li className="nav-item">
            <Link to="adminprofile">
              <a
                style={{ color: "black", fontSize: "20px" }}
                className="nav-link"
                href="#"
              >
                <img src={profile} style={{ height: "35px" }} /> Profile
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="adminuserslist">
              <a
                style={{ color: "black", fontSize: "20px" }}
                className="nav-link"
                href="#"
              >
                <img src={group} style={{ height: "35px" }} /> Users
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="adminsearchdetails">
              <a
                style={{ color: "black", fontSize: "20px" }}
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
        <Route index element={<AdminProfile />} />
        <Route path="adminprofile" element={<AdminProfile />} />
        <Route path="adminuserslist" element={<AdminUsersList />} />
        <Route path="adminsearchdetails" element={<AdminSearchDetails />} />
      </Routes>
    </>
  );
};
