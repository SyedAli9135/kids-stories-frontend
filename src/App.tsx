import React from "react";
import "./App.css";
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
function App() {
  return (
    <>
      <Navbar />
      <AdminDashboard />
      <Footer />
    </>
  );
}

export default App;
