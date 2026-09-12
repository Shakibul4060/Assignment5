import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">

        {/* Hero Content */}
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <span className="block brand-gradient">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-600 transition hover:border-pink-400 hover:text-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Development technology stack"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;