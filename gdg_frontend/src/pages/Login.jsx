import collegeBg from "../assets/college.png";
import collegeLogo from "../assets/stcet-logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative overflow-x-hidden"
      style={{ backgroundImage: `url(${collegeBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content wrapper */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
        
        {/* HERO SECTION */}
        <div className="text-center mb-10 flex flex-col items-center">
          
          {/* Logo */}
          <img
            src={collegeLogo}
            alt="STCET Logo"
            className="h-20 md:h-24 w-auto mb-4 drop-shadow-md"
          />

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            STCET CAMPUS ISSUE PORTAL
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-slate-200 text-sm md:text-base">
            Report and manage campus issues efficiently
          </p>
        </div>

        {/* LOGIN CARD */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          
          <h2 className="text-xl font-semibold text-slate-800 text-center">
            Login
          </h2>

          <form className="mt-6 space-y-4">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                College Email
              </label>
              <input
                type="email"
                placeholder="yourname@stcet.ac.in"
                pattern=".+@stcet\.ac\.in"
                title="Please use your college email ID"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

         {/* Register link */}
<p className="text-sm text-slate-500 text-center mt-4">
  New user?{" "}
  <Link
    to="/register"
    className="text-blue-600 hover:underline font-medium"
  >
    Register here
  </Link>
</p>

          {/* Footer note */}
          <p className="text-xs text-slate-400 text-center mt-6">
            Authorized STCET users only
          </p>
        </div>
      </div>
    </div>
  );
}
