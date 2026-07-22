import { Link } from "react-router-dom";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#090909] flex items-center px-6 py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <p className="text-center uppercase tracking-[8px] text-yellow-400 font-semibold">
          Choose Your Experience
        </p>

        <h2 className="mt-5 text-center text-5xl font-bold text-white leading-snug">
          One Platform.
          <br />
          Two Powerful Experiences.
        </h2>

        {/* Cards */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {/* Personal Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-lg transition duration-500 hover:-translate-y-3 hover:border-yellow-400/40 hover:shadow-yellow-400/20">
            <p className="text-yellow-400 font-medium">For Individuals</p>
            <h3 className="mt-4 text-4xl font-bold text-white">Personal</h3>
            <p className="mt-6 leading-8 text-gray-400">
              Track groceries, medicines and cosmetics with smart AI reminders.
              Never waste money because of forgotten expiry dates.
            </p>
            <Link
              to="/personal/login"
              className="mt-10 inline-block rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-500"
            >
              Explore →
            </Link>
          </div>

          {/* Business Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-lg transition duration-500 hover:-translate-y-3 hover:border-yellow-400/40 hover:shadow-yellow-400/20">
            <p className="text-yellow-400 font-medium">For Companies</p>
            <h3 className="mt-4 text-4xl font-bold text-white">Business</h3>
            <p className="mt-6 leading-8 text-gray-400">
              Manage restaurants, pharmacies, supermarkets and warehouses with
              AI-powered inventory expiry management.
            </p>
            <Link
              to="/business/login"
              className="mt-10 inline-block rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-yellow-500"
            >
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
