function HeroButtons() {
  return (
    <div className="mt-12 flex justify-center gap-5">

      <button className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
        Get Started
      </button>

      <button className="rounded-full border border-white/20 px-8 py-4 text-white transition hover:border-yellow-400 hover:text-yellow-400">
        Watch Demo
      </button>

    </div>
  );
}

export default HeroButtons;