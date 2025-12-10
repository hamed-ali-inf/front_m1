import { Link } from "react-router-dom";

export default function Login() {
return (
<div>
<h1>Login Page</h1>


<Link to="/dashboard/student" style={{ color: "green" }}>
Enter Dashboard
</Link>
</div>
);
}