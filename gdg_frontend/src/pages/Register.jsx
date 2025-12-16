import { useState } from "react";
import { Link } from "react-router-dom";
import collegeBg from "../assets/college.png";
import collegeLogo from "../assets/stcet-logo.png";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    dept: "",
    year: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // -------- Client-side validation --------
    if (!formData.name.trim()) {
      return setError("Name is required.");
    }

    if (!formData.dept.trim()) {
      return setError("Department is required.");
    }

    if (!formData.email.endsWith("@stcet.ac.in")) {
      return setError("Please use your STCET college email.");
    }

    if (formData.password.length < 8) {
      return setError("Password must be at least 8 characters long.");
    }

    // If all validations pass
    setError("");

    // For now, just log the data
    console.log("Registration data:", formData);

    // Later this will call:
    // POST /auth/register
  };

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
          <img
            src={collegeLogo}
            alt="STCET Logo"
            className="h-20 md:h-24 w-auto mb-4 drop-shadow-md"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            STCET CAMPUS ISSUE PORTAL
          </h1>
          <p className="mt-3 text-slate-200 text-sm md:text-base">
            New User Registration
          </p>
        </div>

        {/* REGISTER CARD */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          
          <h2 className="text-xl font-semibold text-slate-800 text-center">
            Register
          </h2>

          {/* Error message */}
          {error && (
            <p className="mt-4 text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Department
              </label>
              <input
                type="text"
                name="dept"
                value={formData.dept}
                onChange={handleChange}
                placeholder="CSE / ECE / EE / ME etc."
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Year
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
              <p className="text-xs text-slate-500 mt-1">
                *Admins don’t need to fill this field
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                College Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="yourname@stcet.ac.in"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Register
            </button>
          </form>

          {/* Login link */}
          <p className="text-sm text-slate-500 text-center mt-4">
            Already registered?{" "}
            <Link to="/" className="text-blue-600 hover:underline font-medium">
              Login here
            </Link>
          </p>

          <p className="text-xs text-slate-400 text-center mt-6">
            Registration is restricted to STCET users
          </p>
        </div>
      </div>
    </div>
  );
}
