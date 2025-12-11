
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DocumentRequest from './DocumentRequest';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Student Dashboard */}
        <Route path="/dashboard/student" element={<Dashboard role="student" />}>
  <Route path="requests" element={<DocumentRequest />} />
</Route>

        {/* Teacher Dashboard */}
        <Route
          path="/dashboard/teacher/*"
          element={<Dashboard role="teacher" />}
        />

      </Routes>
    </BrowserRouter>
  );
}