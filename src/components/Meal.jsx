import { useState, useContext } from "react";
import MealContext from "../../store/MealContext";
export default function Meal({ children }) {
  const { handleShowModal } = useContext(MealContext);
  const [showDetails, setShowDetails] = useState(false);
  function handleShowDetails() {
    setShowDetails((prev) => !prev);
  }
  return (
    <div className="meal">
      <div className="info-top flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h2 className="text-xl md:text-3xl">{children}</h2>
          <button
            onClick={handleShowDetails}
            className={`text-lg font-bold text-[#82B119] select-none md:cursor-pointer md:text-2xl transition-all ${
              showDetails ? "rotate-180" : ""
            }`}
          >
            V
          </button>
        </div>
        <button
          onClick={handleShowModal}
          className="text-xl rounded-full bg-[#82B119] h-[4vh] w-[4vh] select-none md:cursor-pointer md:text-2xl"
        >
          +
        </button>
      </div>
      <div className="info-bottom flex gap-2 justify-center text-sm md:text-base">
        <p>787 kcal</p>
        <p>20 Protein</p>
        <p>5 Fat</p>
        <p>10 carbohydrates</p>
      </div>
      <div
        className={`details flex gap-8 md:gap-16 mt-1 transition-all overflow-hidden ${
          showDetails ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="product">
          <p>Product name: </p>
          <p>Quantity: </p>
        </div>
        <div className="recipe">
          <p>Recipe:</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
