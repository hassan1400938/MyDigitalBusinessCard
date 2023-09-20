import React from "react";
import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer";
import "../components/style.css";

export default function App() {
  return (
    <div className="container">
      <div className="center">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
