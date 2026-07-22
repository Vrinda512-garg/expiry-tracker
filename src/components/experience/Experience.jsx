import { Link } from "react-router-dom";
function Experience() {
  return (
   <section
  id="experience"
  className="min-h-screen bg-[#090909] flex items-center px-6"
>

      <div className="mx-auto w-full max-w-7xl">

        <p className="text-center uppercase tracking-[8px] text-yellow-400">
          Choose Your Experience
        </p>

        <h2 className="mt-5 text-center text-5xl font-bold text-white">
          One Platform.
          <br />
          Two Powerful Experiences.
        </h2>

        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {/* Personal */}

          <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-400/40">

            <p className="text-yellow-400">For Individuals</p>

            <h3 className="mt-4 text-4xl font-bold text-white">
              Personal
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Track groceries, medicines and cosmetics with smart AI reminders.
              Never waste money because of forgotten expiry dates.
            </p>

            <Link
  to="/personal"
  className="mt-10 inline-block rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
>
  Explore →
</Link>

          </div>

          {/* Business */}

          <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-yellow-400/40">

            <p className="text-yellow-400">For Companies</p>

            <h3 className="mt-4 text-4xl font-bold text-white">
              Business
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              Manage restaurants, pharmacies, supermarkets and warehouses with
              AI powered inventory expiry management.
            </p>

            <Link
  to="/business"
  className="mt-10 inline-block rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
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