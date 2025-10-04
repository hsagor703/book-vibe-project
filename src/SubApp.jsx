import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import Banner from "./Components/Banner";

const SubApp = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="px-2">
        
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default SubApp;
