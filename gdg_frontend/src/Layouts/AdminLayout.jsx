import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold">
          STCET • Admin
        </h1>

        <div className="flex gap-4 text-sm">
          <Link to="/admin/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className="text-red-400 hover:underline"
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
