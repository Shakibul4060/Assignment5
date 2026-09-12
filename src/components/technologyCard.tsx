import type { technology as Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-9 w-9 object-contain"
          />
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-20 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating (same row) */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
          {technology.difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechnologyCard;