import React from "react";
import Sidebar from "../components/Sidebar";
import { useApp } from "../context/AppContext";

function Applications() {
  const { applications } = useApp();

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-10 p-4">
          <h2 className="fw-bold">My Applications</h2>

          <p className="text-muted mb-4">
            Track the jobs you have applied for.
          </p>

          {applications.length === 0 ? (
            <div className="card shadow-sm border-0">
              <div className="card-body text-center py-5">
                <h4>No applications yet 📋</h4>

                <p className="text-muted">
                  Apply for a job to see it here.
                </p>

                <a
                  href="/jobs"
                  className="btn btn-primary"
                >
                  Browse Jobs
                </a>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle shadow-sm">
                <thead className="table-primary">
                  <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Applied Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id}>
                      <td className="fw-semibold">
                        {application.title}
                      </td>

                      <td>
                        {application.company}
                      </td>

                      <td>
                        {application.appliedDate}
                      </td>

                      <td>
                        <span className="badge bg-success">
                          {application.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Applications;