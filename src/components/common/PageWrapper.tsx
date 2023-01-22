import React from "react";
import { pageWrapperProps } from "../../models/props/pageWrapperProps";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const PageWrapper: React.FC<pageWrapperProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
