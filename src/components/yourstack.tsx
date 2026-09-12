import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">

     
      <div>
        <h2 className="text-base font-bold text-slate-800">
          Your Stack
        </h2>

        <p className="mt-1 text-[10px] text-slate-400">
          {stack.length}{" "}
          {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      
      {stack.length === 0 ? (
        <div className="mt-5 rounded-lg border border-dashed border-slate-200 p-5 text-center">
          <div className="text-2xl">🧩</div>

          <p className="mt-2 text-xs font-semibold text-slate-600">
            Your stack is empty
          </p>

          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            Add technologies from the cards to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-7 w-7 object-contain"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-[11px] font-semibold text-slate-700">
                  {technology.name}
                </h3>

                <p className="text-[9px] text-slate-400">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
               className="cursor-pointer text-lg leading-none text-slate-400 transition hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      
      <button
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="mt-5 w-full cursor-pointer rounded-md border border-red-300 py-2 text-[11px] font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Remove All
      </button>
    </aside>
  );
}

export default YourStack;