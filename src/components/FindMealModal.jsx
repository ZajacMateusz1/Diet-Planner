import { useState, useContext, useRef, useEffect } from "react";
import MealContext from "../../store/MealContext.jsx";
import FilterInputs from "./FilterInputs.jsx";
import Button from "./Button.jsx";
import MEALS from "../../meals.json";
export default function FindMealModal() {
  const { modalState, handleCloseModal, addMeal } = useContext(MealContext);
  const modal = useRef();
  const [showFilters, setShowFilters] = useState(false);
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
  useEffect(() => {
    if (modalState) modal.current.showModal();
    else modal.current.close();
  }, [modalState]);
  function handleShowFilters() {
    setShowFilters((prev) => !prev);
  }
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
    <dialog
      className="bg-[#383838] text-white p-4 fixed top-1/2 left-1/2 -translate-1/2 w-5/6 h-11/12 md:w-1/4 rounded"
      ref={modal}
      onClose={handleCloseModal}
    >
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl uppercase">Choose your meal</h2>
        <input
          type="text"
          value={filters.query}
          onChange={(e) => {
            handleSearch(e.target.value, "query");
          }}
          placeholder="Search your meal"
          className="bg-[#eee] p-2 text-black rounded-sm  my-4 w-3/4 text-sm md:text-base"
        />
        <div className="buttons mb-4 flex justify-around gap-8">
          <Button onClick={handleShowFilters}>
            {showFilters ? "Hide filters" : "More filters"}
          </Button>
          <Button onClick={handleCloseModal}>Close</Button>
        </div>
        {showFilters && (
          <div className="filters mb-8">
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
        )}
        {filtered.length > 0 ? (
          <ul>
            {filtered.map((meal) => {
              return (
                <li key={meal.id} className="select-none">
                  <button
                    onClick={() => {
                      addMeal(meal);
                      handleCloseModal();
                    }}
                    className="text-left"
                  >
                    <p className="font-bold text-sm md:text-base">
                      {meal.name}
                    </p>{" "}
                    <p className="meal-info flex gap-2 text-xs md:text-sm">
                      <span>kcal: {meal.kcal}</span>
                      <span className="text-blue-500">P: {meal.protein}</span>
                      <span className="text-yellow-400">F: {meal.fat}</span>
                      <span className="text-violet-400">C: {meal.carbs}</span>
                    </p>
                    <hr className="my-2" />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>
            Hmm... nothing tasty was found. Maybe try another keyword or change
            filters?
          </p>
        )}
      </div>
    </dialog>
  );
}
