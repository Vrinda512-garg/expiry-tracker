import { Link } from "react-router-dom";

function PersonalLogin() {
  return (
    <div className="flex min-h-screen text-white">
      {/* Left Section - Golden Linear Background */}
      <div
        className="flex flex-col justify-center items-center w-1/2 px-12"
        style={{
          background: "linear-gradient(135deg, #FFD700, #E6B800, #C99700)",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.3)",
        }}
      >
        {/* App Icon */}
        <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-black/20 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
          <span className="text-3xl font-bold text-black">AI</span>
        </div>

        {/* App Name */}
        <h1 className="text-5xl font-extrabold text-black drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          ExpiryAI
        </h1>
        <p className="mt-4 text-black/80 text-center max-w-md font-medium">
          Track and manage expiry dates with AI-powered reminders — groceries, medicines, and cosmetics made effortless.
        </p>

        {/* Hero Image */}
        <div className="mt-10 w-80 h-56 overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.4)] border border-black/20">
          <img
            src="data:image/webp;base64,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"
            alt="ExpiryAI preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Stats */}
        <div className="mt-10 flex gap-12 text-center">
          <div>
            <h2 className="text-3xl font-bold text-black">10K+</h2>
            <p className="text-black/70 text-sm">Users</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">500+</h2>
            <p className="text-black/70 text-sm">Products Tracked</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black">99.9%</h2>
            <p className="text-black/70 text-sm">Accuracy</p>
          </div>
        </div>
      </div>

      {/* Right Section - Dark Premium Login */}
      <div className="flex w-1/2 items-center justify-center px-12 bg-[#0a0a0a]">
        <div className="w-full max-w-md rounded-3xl border border-yellow-400/20 bg-white/10 p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(250,193,0,0.25)]">
          <Link to="/" className="text-sm text-yellow-400 hover:text-yellow-300 transition">
            ← Back to Home
          </Link>

          <h1 className="mt-8 text-4xl font-bold text-yellow-400">Welcome Back</h1>
          <p className="mt-3 leading-7 text-gray-300">
            Login to manage your groceries, medicines and cosmetics with AI-powered expiry reminders.
          </p>

          {/* Email Field */}
          <div className="mt-10">
            <label className="mb-2 block text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-yellow-400/20 bg-[#0f0f0f] px-5 py-4 text-white outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Password Field */}
          <div className="mt-6">
            <label className="mb-2 block text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-yellow-400/20 bg-[#0f0f0f] px-5 py-4 text-white outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Forgot Password */}
          <div className="mt-4 flex justify-end">
            <button className="text-sm text-yellow-400 hover:text-yellow-300 transition">
              Forgot Password?
            </button>
          </div>

          {/* Buttons */}
          <button className="mt-10 w-full rounded-xl bg-yellow-400 py-4 font-semibold text-black transition hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,193,0,0.5)]">
            Continue
          </button>

          <button className="mt-4 w-full rounded-xl border border-yellow-400/20 bg-white/5 py-4 text-white transition hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,193,0,0.3)]">
            Continue with Google
          </button>

          {/* Footer */}
          <p className="mt-8 text-center text-gray-400">
            New to ExpiryAI?{" "}
           <Link
  to="/personal/signup"
  className="cursor-pointer text-yellow-400 hover:text-yellow-300 font-medium"
>
  Create an Account
</Link>

          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalLogin;






