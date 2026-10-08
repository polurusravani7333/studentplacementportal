import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import { fetchJobs } from "../services/jobService";
import { useApp } from "../context/AppContext";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { applyForJob } = useApp();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);

        const data = await fetchJobs();
        setJobs(data);

        if (data.length === 0) {
          setError("Unable to load jobs right now.");
        }
      } catch (err) {
        setError("Something went wrong while loading jobs.");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.location.toLowerCase().includes(searchText);

    const matchesType =
      jobType === "All" ||
      job.type.toLowerCase().includes(jobType.toLowerCase());

    return matchesSearch && matchesType;
  });

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-10 p-4">

          <div className="mb-4">
            <h2 className="fw-bold">
              Job Opportunities
            </h2>

            <p className="text-muted">
              Find the right placement opportunity for you.
            </p>
          </div>

          {/* Search and Filter */}

          <div className="row g-3 mb-4">

            <div className="col-md-8">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search by job title, company or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <select
                className="form-select form-select-lg"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="All">
                  All Job Types
                </option>

                <option value="Full Time">
                  Full Time
                </option>

                <option value="Part Time">
                  Part Time
                </option>

                <option value="Contract">
                  Contract
                </option>

                <option value="Internship">
                  Internship
                </option>
              </select>
            </div>

          </div>

          {/* Loading */}

          {loading && (
            <div className="text-center py-5">

              <div
                className="spinner-border text-primary"
                role="status"
              ></div>

              <p className="mt-3">
                Loading job opportunities...
              </p>

            </div>
          )}

          {/* Error */}

          {error && !loading && (
            <div className="alert alert-warning">
              {error}
            </div>
          )}

          {/* Jobs */}

          {!loading && !error && (
            <div className="row g-4">

              {filteredJobs.map((job) => (
                <div
                  className="col-md-6 col-xl-4"
                  key={job.id}
                >
                  <JobCard
                    job={job}
                    onApply={applyForJob}
                  />
                </div>
              ))}

            </div>
          )}

          {/* No Results */}

          {!loading &&
            !error &&
            filteredJobs.length === 0 && (
              <div className="text-center py-5">

                <h5>
                  No jobs found
                </h5>

                <p className="text-muted">
                  Try a different search term or job type.
                </p>

              </div>
            )}

        </div>
      </div>
    </div>
  );
}

export default Jobs;