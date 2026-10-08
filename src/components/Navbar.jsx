import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">
        Student Placement Dashboard
      </Link>

      <div>
        <Link className="btn btn-light me-2" to="/login">
          Login
        </Link>

        <Link className="btn btn-outline-light" to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;