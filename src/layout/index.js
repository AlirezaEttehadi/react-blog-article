import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout({ children }) {
  return (
    <div>
      <Router>
        <Header />
        {children}
        <Footer />
      </Router>
    </div>
  );
}
