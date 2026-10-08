import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("placementUser")) || null
  );

  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem("applications")) || []
  );

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Welcome to the Student Placement Dashboard!",
      type: "info",
    },
    {
      id: 2,
      message: "New placement opportunities are available.",
      type: "success",
    },
  ]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("placementUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("placementUser");
  };

  const applyForJob = (job) => {
    const newApplication = {
      id: Date.now(),
      jobId: job.id,
      title: job.title,
      company: job.company,
      status: "Applied",
      appliedDate: new Date().toLocaleDateString(),
    };

    const updatedApplications = [...applications, newApplication];

    setApplications(updatedApplications);
    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    setNotifications((prev) => [
      ...prev,
      {
        id: Date.now(),
        message: `Application submitted for ${job.title} at ${job.company}.`,
        type: "success",
      },
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        applications,
        notifications,
        login,
        logout,
        applyForJob,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}