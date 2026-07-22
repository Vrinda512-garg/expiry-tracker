import { useState } from "react";
import { Link } from "react-router-dom";

function BusinessLogin() {
  const [activeRole, setActiveRole] = useState("Warehouse");

  return (
    <div className="flex min-h-screen text-white">
      {/* Left Section - Golden Background */}
      <div
        className="flex flex-col justify-center items-center w-1/2 px-12"
        style={{
          background: "linear-gradient(135deg, #FFD700, #E6B800, #C99700)",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.3)",
        }}
      >
        <h1 className="text-5xl font-extrabold text-black">ExpiryAI Business</h1>
        <p className="mt-4 text-black/80 text-center max-w-md font-medium">
          Manage warehouses, deliveries, and admin operations with AI-powered tracking.
        </p>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex w-1/2 items-center justify-center px-12 bg-[#0a0a0a]">
        <div className="w-full max-w-md rounded-3xl border border-yellow-400/20 bg-white/10 p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(250,193,0,0.25)]">
          <Link to="/" className="text-sm text-yellow-400 hover:text-yellow-300 transition">
            ← Back to Home
          </Link>

          <h1 className="mt-8 text-4xl font-bold text-yellow-400">Business Login</h1>
          <p className="mt-3 leading-7 text-gray-300">
            Sign in to access your {activeRole.toLowerCase()} dashboard.
          </p>

          {/* Role Tabs */}
          <div className="mt-6 flex justify-center gap-4">
            {["Warehouse", "Admin", "Delivery Person"].map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-5 py-2 rounded-full border transition ${
                  activeRole === role
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-transparent text-yellow-400 border-yellow-400/30 hover:bg-yellow-400/20"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Email */}
          <div className="mt-10">
            <label className="mb-2 block text-sm text-gray-300">
              {activeRole} ID / Email
            </label>
            <input
              type="email"
              placeholder={`Enter your ${activeRole.toLowerCase()} email`}
              className="w-full rounded-xl border border-yellow-400/20 bg-[#0f0f0f] px-5 py-4 text-white outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="mt-6">
            <label className="mb-2 block text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-yellow-400/20 bg-[#0f0f0f] px-5 py-4 text-white outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Buttons */}
          <button className="mt-10 w-full rounded-xl bg-yellow-400 py-4 font-semibold text-black transition hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,193,0,0.5)]">
            Sign In
          </button>

          <p className="mt-8 text-center text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/business/signup"
              className="cursor-pointer text-yellow-400 hover:text-yellow-300 font-medium"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BusinessLogin;

