import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function StudentDashboard() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("User not authenticated");
        }

        const res = await api.get("/student/my-issues", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIssues(res.data);
      } catch (err) {
        setError(
          err.response?.data?.error ||
          "Failed to load issues. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  // Derived stats
  const totalIssues = issues.length;
  const pendingIssues = issues.filter(
    (issue) => issue.status === "Pending"
  ).length;
  const resolvedIssues = issues.filter(
    (issue) => issue.status === "Resolved"
  ).length;

  if (loading) {
    return (
      <p className="text-center text-slate-500 mt-10">
        Loading your issues...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-600 mt-10">
        {error}
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Student Dashboard
        </h1>
        <p className="text-slate-600 mt-1">
          Track and manage issues you have reported
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Total Issues" value={totalIssues} />
        <StatCard
          title="Pending"
          value={pendingIssues}
          color="text-yellow-600"
        />
        <StatCard
          title="Resolved"
          value={resolvedIssues}
          color="text-green-600"
        />
      </div>

      {/* Action Button */}
      <div>
        <Link
          to="/student/report"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          + Report New Issue
        </Link>
      </div>

      {/* Recent Issues */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Recent Issues
        </h2>

        {issues.length === 0 ? (
          <p className="text-slate-500">
            You haven’t reported any issues yet.
          </p>
        ) : (
          <div className="space-y-3">
            {issues.map((issue, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-3"
              >
                <div>
                  <p className="font-medium text-slate-800">
                    {issue.title}
                  </p>
                  <p className="text-sm text-slate-500">
                    {issue.category}
                  </p>
                </div>

                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    issue.status === "Resolved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {issue.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* Reusable stat card component */
function StatCard({ title, value, color = "text-slate-800" }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-sm text-slate-500">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </p>
    </div>
  );
}
