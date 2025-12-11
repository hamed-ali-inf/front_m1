import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import {
  FiCalendar,
  FiBook,
  FiBell,
  FiFileText,
  FiMessageCircle,
  FiUsers,
  FiUser,
} from "react-icons/fi";

type Role = "student" | "teacher";

interface Item {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  role: Role;
}

export default function Sidebar({ role }: SidebarProps) {
  const location = useLocation();

  
  const teacherItems: Item[] = [
    { label: "Emploi du temps",      icon: <FiCalendar />,      path: "/dashboard/teacher/schedule" },
    { label: "Cours",                icon: <FiBook />,          path: "/dashboard/teacher/courses" },
    { label: "Actualités & Notifications", icon: <FiBell />,   path: "/dashboard/teacher/notifications" },
    { label: "Messages",             icon: <FiMessageCircle />, path: "/dashboard/teacher/messages" },
    { label: "Étudiants",            icon: <FiUsers />,         path: "/dashboard/teacher/students" },
    { label: "Enseignants",          icon: <FiUsers />,         path: "/dashboard/teacher/enseignants" },
    { label: "Account",              icon: <FiUser />,          path: "/dashboard/teacher/account" },
  ];

  
  const studentItems: Item[] = [
    { label: "Emploi du temps",          icon: <FiCalendar />,       path: "/dashboard/student/schedule" },
    { label: "Chat avec les enseignants", icon: <FiMessageCircle />, path: "/dashboard/student/chat" },
    { label: "Cours & Ressources",       icon: <FiBook />,           path: "/dashboard/student/courses" },
    { label: "Actualités & Notifications", icon: <FiBell />,         path: "/dashboard/student/notifications" },
    { label: "Demandes de documents",    icon: <FiFileText />,       path: "/dashboard/student/requests" },
    { label: "Mon compte",               icon: <FiUser />,           path: "/dashboard/student/account" },
  ];

  const items = role === "teacher" ? teacherItems : studentItems;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="home-icon"></span>
        <h2>{role === "teacher" ? "Espace Enseignant" : "Students Portal"}</h2>
      </div>

      <div className="sidebar-items">
        {items.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-item ${active ? "active" : ""}`}
            >
              <div className="icon">{item.icon}</div>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="sidebar-logout">
        <span className="logout-icon">⬅</span>
      </div>
    </div>
  );
}
