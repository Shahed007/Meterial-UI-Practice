import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </React.StrictMode>
);
