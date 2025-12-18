import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Logged in but wrong role
  if (allowedRole && role !== allowedRole) {
    return role === "admin"
      ? <Navigate to="/admin/dashboard" replace />
      : <Navigate to="/student/dashboard" replace />;
  }

  // Allowed
  return children;
}
