


import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#080808] flex items-center">
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-20 px-10">

        <HeroContent />

        <HeroVisual />

      </div>
    </section>
  );
}

export default Hero;