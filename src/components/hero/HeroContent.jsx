import { useEffect, useState } from "react";
import HeroButtons from "./HeroButtons";

const words = [
  "Families",
  "Students",
  "Restaurants",
  "Warehouses",
  "Blinkit",
  "Everyone",
];

function HeroContent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 text-center">

      <p className="mb-6 uppercase tracking-[8px] text-yellow-400">
        AI Powered Expiry Intelligence
      </p>

      <div className="mb-6">
  <h1 className="animate-pulse text-8xl font-black tracking-tight text-white">
    Expiry
    <span className="text-yellow-400">AI</span>
  </h1>
</div>

<h2 className="text-5xl font-bold leading-tight text-white">
  AI Never Sleeps.
</h2>

<h3 className="mt-3 text-3xl text-gray-300">
  So Your Products Don't Expire.
</h3>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        Smart AI powered expiry tracking for groceries, medicines,
        cosmetics and enterprise inventory.
      </p>

      <div className="mt-16">

       <p className="text-lg text-gray-300">
  Built for
</p>

        <h3 className="mt-3 text-3xl font-semibold text-yellow-300">
          {words[index]}
        </h3>

      </div>

      <HeroButtons />

    </div>
  );
}

export default HeroContent;