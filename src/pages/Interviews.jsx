import React from "react";
import Sidebar from "../components/Sidebar";

function Interviews() {
  const interviews = [
    {
      id: 1,
      company: "Infosys",
      role: "Software Developer",
      date: "15 October 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Upcoming",
    },
    {
      id: 2,
      company: "TCS",
      role: "Graduate Engineer Trainee",
      date: "20 October 2026",
      time: "2:00 PM",
      mode: "Online",
      status: "Upcoming",
    },
    {
      id: 3,
      company: "Accenture",
      role: "Associate Software Engineer",
      date: "25 October 2026",
      time: "11:30 AM",
      mode: "Campus",
      status: "Scheduled",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-10 p-4">
          <h2 className="fw-bold">Interview Schedule</h2>

          <p className="text-muted mb-4">
            Keep track of your upcoming placement interviews.
          </p>

          <div className="row g-4">
            {interviews.map((interview) => (
              <div className="col-md-6 col-xl-4" key={interview.id}>
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">

                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="fw-bold">
                        {interview.company}
                      </h5>

                      <span className="badge bg-success">
                        {interview.status}
                      </span>
                    </div>

                    <p className="text-primary fw-semibold">
                      {interview.role}
                    </p>

                    <hr />

                    <p className="mb-2">
                      📅 <strong>Date:</strong> {interview.date}
                    </p>

                    <p className="mb-2">
                      ⏰ <strong>Time:</strong> {interview.time}
                    </p>

                    <p className="mb-0">
                      📍 <strong>Mode:</strong> {interview.mode}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Interviews;