import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { useApp } from "../context/AppContext";

function Dashboard() {
  const { user, applications, notifications } = useApp();

  const chartData = [
    { name: "Applied", value: applications.length },
    { name: "Interview", value: 3 },
    { name: "Selected", value: 1 },
    { name: "Rejected", value: 1 },
  ];

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-10 p-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold">
                Welcome, {user?.name || "Student"} 👋
              </h2>

              <p className="text-muted">
                Track your placement journey from one place.
              </p>
            </div>

            <Link
              to="/jobs"
              className="btn btn-primary"
            >
              Find Jobs
            </Link>
          </div>

          <div className="row g-4 mb-4">

            <div className="col-md-3">
              <StatCard
                title="Applications"
                value={applications.length}
                icon="📋"
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="Interviews"
                value="3"
                icon="📅"
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="Selected"
                value="1"
                icon="🎉"
              />
            </div>

            <div className="col-md-3">
              <StatCard
                title="Notifications"
                value={notifications.length}
                icon="🔔"
              />
            </div>

          </div>

          <div className="row g-4">

            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body">

                  <h5 className="fw-bold mb-4">
                    Placement Statistics
                  </h5>

                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <BarChart data={chartData}>
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="value" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">

                  <h5 className="fw-bold mb-3">
                    Upcoming Deadlines
                  </h5>

                  <div className="border-bottom py-3">
                    <strong>Infosys Recruitment</strong>
                    <br />
                    <small className="text-muted">
                      Application deadline: 15 Oct 2026
                    </small>
                  </div>

                  <div className="border-bottom py-3">
                    <strong>TCS Campus Drive</strong>
                    <br />
                    <small className="text-muted">
                      Application deadline: 20 Oct 2026
                    </small>
                  </div>

                  <div className="py-3">
                    <strong>Accenture Hiring</strong>
                    <br />
                    <small className="text-muted">
                      Application deadline: 25 Oct 2026
                    </small>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
