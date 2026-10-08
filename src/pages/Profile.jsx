import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useApp } from "../context/AppContext";

function Profile() {
  const { user, login } = useApp();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [graduationYear, setGraduationYear] = useState("2027");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      name,
      email,
      phone,
      branch,
      graduationYear,
    };

    login(updatedUser);
    setMessage("Profile updated successfully!");
  };

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-10 p-4">
          <h2 className="fw-bold">My Profile</h2>

          <p className="text-muted mb-4">
            Manage your student profile information.
          </p>

          {message && (
            <div className="alert alert-success">
              {message}
            </div>
          )}

          <div className="card shadow-sm border-0">
            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Branch
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Example: CSE"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Graduation Year
                    </label>

                    <select
                      className="form-select"
                      value={graduationYear}
                      onChange={(e) =>
                        setGraduationYear(e.target.value)
                      }
                    >
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Save Profile
                </button>

              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;