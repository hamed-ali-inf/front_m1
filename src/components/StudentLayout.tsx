// src/components/StudentLayout.tsx

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./StudentLayout.css"; // We will create this CSS file for layout styles

const StudentLayout = () => {
  return (
    <div className="student-layout">
      <Sidebar role="student" />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;