import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";
import { UserDashboard } from "./components/dashboards/users/UserDashboard";
import { AdminDashboard } from "./components/dashboards/admin/AdminDashboard";
import { Homepage } from "./components/pages/Homepage";
import { Story } from "./components/pages/Story";
import { PageWrapper } from "./components/common/PageWrapper";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper children={<Homepage />} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="contact"
          element={<PageWrapper children={<Contact />} />}
        />
        <Route path="about" element={<PageWrapper children={<About />} />} />
        <Route
          path="userdashboard/*"
          element={<PageWrapper children={<UserDashboard />} />}
        />
        <Route
          path="admindashboard/*"
          element={<PageWrapper children={<AdminDashboard />} />}
        />
        <Route path="story" element={<PageWrapper children={<Story />} />} />
      </Routes>
    </>
  );
}

export default App;
