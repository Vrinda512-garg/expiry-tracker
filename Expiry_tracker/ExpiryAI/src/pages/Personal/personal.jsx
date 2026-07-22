import { Link } from "react-router-dom";

function Personal() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090909] px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        
        {/* Back to Home */}
        <Link
          to="/"
          className="text-sm text-yellow-400 transition hover:text-yellow-300"
        >
          ← Back to Home
        </Link>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-bold text-white">Welcome Back</h1>
        <p className="mt-3 leading-7 text-gray-400">
          Login to manage your groceries, medicines and cosmetics with AI-powered expiry reminders.
        </p>

        {/* Email Field */}
        <div className="mt-10">
          <label className="mb-2 block text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-white/10 bg-secondary px-5 py-4 text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          />
          <p className="mt-2 text-xs text-gray-500">Example: vrinda@gmail.com</p>
        </div>

        {/* Password Field */}
        <div className="mt-6">
          <label className="mb-2 block text-sm text-gray-300">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-white/10 bg-secondary px-5 py-4 text-white outline-none transition focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          />
          <p className="mt-2 text-xs text-gray-500">Minimum 8 characters</p>
        </div>

        {/* Forgot Password */}
        <div className="mt-4 flex justify-end">
          <button className="text-sm text-yellow-400 hover:text-yellow-300 transition">
            Forgot Password?
          </button>
        </div>

        {/* Buttons */}
        <button className="mt-10 w-full rounded-xl bg-yellow-400 py-4 font-semibold text-black transition hover:bg-yellow-300 hover:shadow-[0_0_15px_rgba(255,255,0,0.4)]">
          Continue
        </button>

        <button className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 py-4 text-white transition hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(255,255,0,0.2)]">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-8 text-center text-gray-400">
          New to ExpiryAI?{" "}
          <span className="cursor-pointer text-yellow-400 hover:text-yellow-300 font-medium">
            Create an Account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Personal;

