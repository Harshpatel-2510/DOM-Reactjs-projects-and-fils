import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Men from "./pages/Men";
import Women from "./pages/Women";
import ReandomAbout from "./pages/ReandomAbout";
import Courses from "./pages/Courses";
import AnyCourse from "./pages/AnyCourse";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Courses" element={<Courses />} />

        {/* Nested Route */}
        <Route path="/Product/Men" element={<Men />} />
        <Route path="/Product/Women" element={<Women />} />

        {/* Dynamic Route */}
        <Route path="/About/:id" element={<ReandomAbout />} />
        <Route path="/Courses/:CourseID" element={<AnyCourse />} />

        {/* Nested Dynamic Routes */}
        <Route path="/Courses/:CourseID/Detail" element={<CourseDetail />} />

        {/* Not Foundpage */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
