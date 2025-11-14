import "./Navbar.css";

export default function Navbar() {
return (
<div className="navbar">
<h3 className="navbar-title">Dashboard</h3>

<div className="navbar-right">
<input
type="text"
placeholder="Search..."
className="navbar-search"
/>

<div className="navbar-profile"></div>
</div>
</div>
);
}
