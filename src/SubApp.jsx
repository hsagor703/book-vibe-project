import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

const SubApp = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="px-2">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default SubApp;
