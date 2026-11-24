

import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Timetable from "./pages/Timetable";
import Dashboard from "./pages/Dashboard";
import Progress from "./pages/Progress";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Assistant from "./pages/Assistant";
import Task from "./pages/Task";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/timetable" element={<Timetable />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/progress" element={<Progress />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/help" element={<Help />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/assistant" element={<Assistant />} />

      <Route path="/task" element={<Task />} />
    </Routes>
  );
}

export default App;