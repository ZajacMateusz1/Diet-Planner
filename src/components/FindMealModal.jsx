import { useState } from "react";
import MEALS from "../../meals.json";
export default function FindMealModal() {
  const [query, setQuery] = useState("");
  function handleSearch(userInput) {
    setQuery(userInput);
  }
  const filtered = MEALS.filter((meal) => {
    return query.toLowerCase() === ""
      ? true
      : meal.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <dialog open={true} className="bg-[#383838] text-white p-4">
      <h2>Choose your meal:</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="bg-[#eee] p-1 text-black rounded-sm mb-2"
      />
      {filtered.length > 0 ? (
        <ul>
          {filtered.map((meal) => {
            return (
              <li key={meal.id}>
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
          {`Hmm... nothing tasty found for ${query}. Maybe try another keyword or change filters?`}
        </p>
      )}
    </dialog>
  );
}
