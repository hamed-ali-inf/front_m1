import { Outlet } from "react-router-dom"; 
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

type Role = "student" | "teacher";

interface DashboardProps {
role: Role;
}

export default function Dashboard({ role }: DashboardProps) {
return (
<div className="dashboard-container">
{/* Sidebar */}
<Sidebar role={role} />

{/* Main Content */}
<div className="dashboard-content">
<Navbar />

<div className="dashboard-page">
<Outlet />
</div>
</div>
</div>
);
}