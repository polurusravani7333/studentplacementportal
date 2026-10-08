import React from "react";

function JobCard({ job, onApply }) {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title fw-bold">{job.title}</h5>
          <span className="badge bg-primary">{job.type}</span>
        </div>

        <p className="text-primary fw-semibold mb-1">
          {job.company}
        </p>

        <p className="text-muted mb-2">
          📍 {job.location}
        </p>

        <p className="card-text">
          {job.description}
        </p>

        <div className="mb-3">
          <strong>Skills:</strong>
          <div className="mt-2">
            {job.skills?.map((skill, index) => (
              <span
                key={index}
                className="badge bg-light text-dark border me-1 mb-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={() => onApply(job)}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard;