import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Univ from "./pages/Univ";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Student Dashboard */}
        <Route
          path="/dashboard/student/*"
          element={<Dashboard role="student" />}
        />

        {/* Teacher Dashboard */}
        <Route
          path="/dashboard/teacher/*"
          element={<Dashboard role="teacher" />}
        />
   {/* University page */}
        <Route path="/univ" element={<Univ />} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}