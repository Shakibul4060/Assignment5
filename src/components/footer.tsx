function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-100 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-5">

        
          <div className="md:col-span-2">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-linear-to-r from-fuchsia-500 to-purple-600 text-[9px] font-bold text-white">
                DS
              </span>

              <span className="text-sm font-bold text-slate-900">
                Dev <span className="brand-gradient">Stack</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-xs leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex items-center gap-5 text-xs text-slate-600">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-slate-500">
              <a href="#home" className="hover:text-pink-500">
                Home
              </a>

              <a href="#technologies" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#projects" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-slate-500">
              <a href="#about" className="hover:text-pink-500">
                About
              </a>

              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>

              <a href="#careers" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-xs text-slate-500">
              <a href="#privacy" className="hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#terms" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#terms" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;