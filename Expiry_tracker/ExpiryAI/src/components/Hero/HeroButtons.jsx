import { useState } from "react";

function HeroButtons() {
  const [open, setOpen] = useState(false);

  const scrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="mt-12 flex justify-center gap-5">

        <button
          onClick={scrollToExperience}
          className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black shadow-lg shadow-yellow-400/30 transition duration-300 hover:scale-105 hover:bg-yellow-300"
        >
          Get Started
        </button>

        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-md transition duration-300 hover:border-yellow-400 hover:text-yellow-400"
        >
          Watch Demo
        </button>

      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

          <div className="w-[90%] max-w-md rounded-3xl border border-white/10 bg-[#111] p-8 text-center">

            <h2 className="text-3xl font-bold text-white">
              Expiry<span className="text-yellow-400">AI</span>
            </h2>

            <p className="mt-6 text-gray-300">
              AI powered expiry tracking for
              homes and businesses.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              🚀 Demo Coming Soon
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black hover:bg-yellow-300"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default HeroButtons;