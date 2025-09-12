import { useState, useContext } from "react";
import MealContext from "../../store/MealContext";
import CircleButton from "./CircleButton.jsx";
export default function Meal({ children }) {
  const { userMeals, handleShowModal, handleSetSelectedSlot } =
    useContext(MealContext);
  const [showDetails, setShowDetails] = useState(false);
  function handleShowDetails() {
    setShowDetails((prev) => !prev);
  }
  return (
    <div className="meal">
      <div className="info-top flex justify-between items-center gap-4">
        <div className="flex gap-4 items-center">
          <h2 className="text-xl md:text-3xl capitalize">{children}</h2>
          {userMeals[children] && (
            <button
              onClick={handleShowDetails}
              className={`text-lg font-bold text-[#82B119] select-none md:cursor-pointer md:text-2xl transition-all hover:text-[#a8f108] ${
                showDetails ? "rotate-180" : ""
              }`}
            >
              V
            </button>
          )}
        </div>
        <div className="control-buttons flex gap-4">
          {userMeals[children] && (
            <CircleButton
              onClick={() => {
                handleShowModal("deleteMeal");
                handleSetSelectedSlot(children);
              }}
              color={"#FB2C36"}
            >
              ×
            </CircleButton>
          )}
          <CircleButton
            onClick={() => {
              handleShowModal("findMeal");
              handleSetSelectedSlot(children);
            }}
            color={"#82B119"}
          >
            +
          </CircleButton>
        </div>
      </div>
      {userMeals[children] && (
        <>
          <div className="info-bottom flex gap-2 justify-center text-sm md:text-base">
            <p>{userMeals[children].kcal} Kcal</p>
            <p>{userMeals[children].protein} Protein</p>
            <p>{userMeals[children].fat} Fat</p>
            <p>{userMeals[children].carbs} Carbohydrates</p>
          </div>
          <div
            className={`details flex gap-8 md:gap-16 mt-1 transition-all overflow-hidden ${
              showDetails ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="product">
              <p className="text-xs md:text-base">
                Name:{" "}
                <span className="font-bold">{userMeals[children].name}</span>
              </p>
              <p className="text-xs md:text-base">
                Portion:{" "}
                <span className="font-bold">
                  {userMeals[children].portion}g
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
