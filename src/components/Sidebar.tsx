import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { FiCalendar, FiMessageCircle, FiBook, FiBell, FiFileText, FiUser } from "react-icons/fi";


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
{ label: "Emploi du temps", icon: <span>📅</span>, path: "/dashboard/teacher/schedule" },
{ label: "Cours", icon: <span>📘</span>, path: "/dashboard/teacher/courses" },
{ label: "Actualités & Notifications", icon: <span>🔔</span>, path: "/dashboard/teacher/notifications" },
{ label: "Messages", icon: <span>💬</span>, path: "/dashboard/teacher/messages" },
{ label: "Étudiants", icon: <span>🎓</span>, path: "/dashboard/teacher/students" },
{ label: "Enseignants", icon: <span>👨‍🏫</span>, path: "/dashboard/teacher/teachers" },
{ label: "Account", icon: <span>👤</span>, path: "/dashboard/teacher/account" },
];

const studentItems: Item[] = [
  { label: "Emploi du temps", icon: <FiCalendar />, path: "/dashboard/student/schedule" },
  { label: "Chat avec les enseignants", icon: <FiMessageCircle />, path: "/dashboard/student/chat" },
  { label: "Cours & Ressources", icon: <FiBook />, path: "/dashboard/student/courses" },
  { label: "Actualités & Notifications", icon: <FiBell />, path: "/dashboard/student/notifications" },
  { label: "Demandes de documents", icon: <FiFileText />, path: "/dashboard/student/requests" },
  { label: "Mon compte", icon: <FiUser />, path: "/dashboard/student/account" },
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
<Link key={item.path} to={item.path} className={`sidebar-item ${active ? "active" : ""}`}>
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
