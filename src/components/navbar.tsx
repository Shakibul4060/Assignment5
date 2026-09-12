function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-linear-to-r from-fuchsia-500 to-purple-600 text-[10px] font-bold text-white">
            DS
          </span>

          <span className="text-sm font-bold text-slate-900">
            Dev <span className="brand-gradient">Stack</span>
          </span>
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-7 text-xs text-slate-600 md:flex">
          <a
            href="#home"
            className="font-medium text-pink-600 transition hover:text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-4">
          <button
  className="hidden cursor-pointer text-xs font-medium text-slate-700 transition hover:text-pink-500 sm:block"
>
  Sign In
</button>

          <button className="cursor-pointer rounded-full bg-linear-to-r from-pink-600 to-fuchsia-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
  Sign Up
</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;