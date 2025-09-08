import { useState } from "react";
import FilterInputs from "./FilterInputs.jsx";
import MEALS from "../../meals.json";
export default function FindMealModal() {
  const [filters, setFilters] = useState({
    query: "",
    minKcal: "",
    maxKcal: "",
    minProtein: "",
    maxProtein: "",
    minFat: "",
    maxFat: "",
    minCarbs: "",
    maxCarbs: "",
  });
  function handleSearch(userInput, type) {
    setFilters((prev) => ({ ...prev, [type]: userInput }));
  }
  const filtered = MEALS.filter((meal) => {
    const matchQuery =
      filters.query.toLowerCase() === ""
        ? true
        : meal.name.toLowerCase().includes(filters.query.toLowerCase());
    const matchKcal =
      (filters.minKcal === "" || meal.kcal >= filters.minKcal) &&
      (filters.maxKcal === "" || meal.kcal <= filters.maxKcal);
    const matchProtein =
      (filters.minProtein === "" || meal.protein >= filters.minProtein) &&
      (filters.maxProtein === "" || meal.protein <= filters.maxProtein);
    const matchFat =
      (filters.minFat === "" || meal.fat >= filters.minFat) &&
      (filters.maxFat === "" || meal.fat <= filters.maxFat);
    const matchCarbs =
      (filters.minCarbs === "" || meal.carbs >= filters.minCarbs) &&
      (filters.maxCarbs === "" || meal.carbs <= filters.maxCarbs);

    return matchQuery && matchKcal && matchProtein && matchFat && matchCarbs;
  });
  return (
    <dialog open={true} className="bg-[#383838] text-white p-4 text-center">
      <h2 className="text-2xl">Choose your meal:</h2>
      <input
        type="text"
        value={filters.query}
        onChange={(e) => {
          handleSearch(e.target.value, "query");
        }}
        placeholder="Search your meal"
        className="bg-[#eee] p-1 text-black rounded-sm  my-4 w-3/4"
      />
      <div className="filters mb-4">
        <FilterInputs
          minFilter={"minKcal"}
          maxFilter={"maxKcal"}
          filters={filters}
          handleSearch={handleSearch}
        />
        <FilterInputs
          minFilter={"minProtein"}
          maxFilter={"maxProtein"}
          filters={filters}
          handleSearch={handleSearch}
        />
        <FilterInputs
          minFilter={"minFat"}
          maxFilter={"maxFat"}
          filters={filters}
          handleSearch={handleSearch}
        />
        <FilterInputs
          minFilter={"minCarbs"}
          maxFilter={"maxCarbs"}
          filters={filters}
          handleSearch={handleSearch}
        />
      </div>
      {filtered.length > 0 ? (
        <ul>
          {filtered.map((meal) => {
            return (
              <li key={meal.id} className="select-none">
                <p className="font-bold">{meal.name}</p>
                <p className="meal-info flex gap-2 text-sm">
                  <span>kcal: {meal.kcal}</span>
                  <span className="text-blue-500">P: {meal.protein}</span>
                  <span className="text-yellow-400">F: {meal.fat}</span>
                  <span className="text-violet-400">C: {meal.carbs}</span>
                </p>
                <hr className="my-2" />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="">
          {`Hmm... nothing tasty found for ${filters.query}. Maybe try another keyword or change filters?`}
        </p>
      )}
    </dialog>
  );
}
