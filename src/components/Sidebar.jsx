import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useApp();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className="bg-dark text-white p-3 d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <h5 className="fw-bold mb-1">
        Placement Portal
      </h5>

      <small className="text-secondary mb-4">
        {user?.name || "Student"}
      </small>

      <div className="nav flex-column">

        <NavLink
          to="/dashboard"
          className="nav-link text-white mb-2"
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/jobs"
          className="nav-link text-white mb-2"
        >
          💼 Job Opportunities
        </NavLink>

        <NavLink
          to="/applications"
          className="nav-link text-white mb-2"
        >
          📋 My Applications
        </NavLink>

        <NavLink
          to="/interviews"
          className="nav-link text-white mb-2"
        >
          📅 Interviews
        </NavLink>

        <NavLink
          to="/notifications"
          className="nav-link text-white mb-2"
        >
          🔔 Notifications
        </NavLink>

        <NavLink
          to="/profile"
          className="nav-link text-white mb-2"
        >
          👤 Profile
        </NavLink>

      </div>

      <div className="mt-auto pt-4">
        <button
          className="btn btn-outline-light w-100"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;