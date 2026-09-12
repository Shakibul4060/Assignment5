import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TechnologyCard from "./components/technologyCard";
import YourStack from "./components/yourstack";
import Footer from "./components/footer";

import type { technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<technology[]>([]);
  const [stack, setStack] = useState<technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAdd = (technology: technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} already added to your stack`
      );

      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack`
    );
  };

  const handleRemove = (id: number) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (technology) => technology.id !== id
      )
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack`
      );
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty");
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <Hero />

      <main
        id="technologies"
        className="mx-auto max-w-6xl px-6 py-16"
      >
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Explore the{" "}
            <span className="brand-gradient">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex min-h-60 items-center justify-center rounded-xl border border-slate-100">
            <div className="flex flex-col items-center gap-3">
              <span className="loading loading-spinner loading-lg text-pink-500"></span>

              <p className="text-sm text-slate-500">
                Loading technologies...
              </p>
            </div>
          </div>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_230px]">

            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            {/* Your Stack */}
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        )}
      </main>

      <section id="projects" className="hidden">
        Projects section
      </section>

      <section id="about" className="hidden">
        About section
      </section>

      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;