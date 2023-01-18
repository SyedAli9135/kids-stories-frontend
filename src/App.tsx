import React from "react";
import "./App.css";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
}

export default App;
