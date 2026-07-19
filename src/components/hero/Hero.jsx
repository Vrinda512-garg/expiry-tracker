import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909]"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[180px]" />

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1800&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;