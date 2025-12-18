import { Outlet, Link } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-white shadow px-6 py-4 flex justify-between">
        <h1 className="font-bold text-slate-800">
          STCET • Student
        </h1>

        <div className="flex gap-4 text-sm">
          <Link to="/student/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/student/report" className="hover:underline">
            Report Issue
          </Link>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className="text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
