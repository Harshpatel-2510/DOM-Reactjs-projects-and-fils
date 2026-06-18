import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4 bg-blue-200  ">
      <h2>Navbar</h2>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Product</Link>
        <Link to="/Courses">Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
