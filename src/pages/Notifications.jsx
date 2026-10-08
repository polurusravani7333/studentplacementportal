import React from "react";
import Sidebar from "../components/Sidebar";
import { useApp } from "../context/AppContext";

function Notifications() {
  const { notifications } = useApp();

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        <div className="col-md-10 p-4">
          <h2 className="fw-bold">Notifications</h2>

          <p className="text-muted mb-4">
            Stay updated with placement announcements and alerts.
          </p>

          {notifications.length === 0 ? (
            <div className="alert alert-info">
              No notifications available.
            </div>
          ) : (
            <div className="row g-3">
              {notifications.map((notification) => (
                <div
                  className="col-12"
                  key={notification.id}
                >
                  <div
                    className={`alert alert-${notification.type} shadow-sm`}
                  >
                    <strong>🔔 Placement Update</strong>
                    <p className="mb-0 mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Notifications;