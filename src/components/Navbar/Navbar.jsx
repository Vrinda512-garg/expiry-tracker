function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10 md:px-16">

        {/* Left Navigation */}

        <nav className="hidden gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-gray-300 transition hover:text-yellow-400"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-gray-300 transition hover:text-yellow-400"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-300 transition hover:text-yellow-400"
          >
            About
          </a>
        </nav>

        {/* Logo */}

        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold tracking-wide text-white">
          Expiry
          <span className="text-yellow-400">AI</span>
        </h1>

        {/* Right Buttons */}

        <div className="flex items-center gap-4">

          

          <button className="rounded-full border border-yellow-400 px-5 py-2 text-sm font-medium text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-black">
           Explore
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;