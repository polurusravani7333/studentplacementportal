import React from "react";
<BrowserRouter basename="/StudentPlacementDashboard"></BrowserRouter>

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className="container text-center mt-5">
              <h1>Student Placement Dashboard</h1>

              <p className="text-muted">
                Welcome to the Placement Management Portal
              </p>

              <a
                href="/login"
                className="btn btn-primary me-2 mt-3"
              >
                Student Login
              </a>

              <a
                href="/register"
                className="btn btn-outline-primary mt-3"
              >
                Register
              </a>
            </div>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/interviews"
          element={<Interviews />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;