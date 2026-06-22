import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Courses from "./page/Courses";
import Kodr from "./page/Kodr";
import Codex from "./page/Codex";
import Allcourses from "./page/Allcourses";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses" element={<Allcourses />} />
          <Route path="/courses/kodr" element={<Kodr />} />
          <Route path="/courses/codex" element={<Codex />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
