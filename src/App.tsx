import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { UserProfile } from "./components/dashboards/users/UserProfile";
import { UserSearch } from "./components/dashboards/users/UserSearch";
import { UserDashboard } from "./components/dashboards/users/UserDashboard";
import { AdminProfile } from "./components/dashboards/admin/AdminProfile";
import { AdminUsersList } from "./components/dashboards/admin/AdminUsersList";
import { AdminSearchDetails } from "./components/dashboards/admin/AdminSearchDetails";
import { AdminDashboard } from "./components/dashboards/admin/AdminDashboard";
import { Homepage } from "./components/pages/Homepage";
import { Story } from "./components/pages/Story";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="userdashboard/*" element={<UserDashboard />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="usersearch" element={<UserSearch />} />
        <Route path="admindashboard/*" element={<AdminDashboard />} />
        <Route path="adminprofile" element={<AdminProfile />} />
        <Route path="adminuserslist" element={<AdminUsersList />} />
        <Route path="adminsearchdetails" element={<AdminSearchDetails />} />
        <Route path="story" element={<Story />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
