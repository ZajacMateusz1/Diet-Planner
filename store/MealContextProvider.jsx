import { useReducer, useState } from "react";
import MealContext from "./MealContext.jsx";
const mealsStorage = JSON.parse(localStorage.getItem("meals")) || {
  breakfast: null,
  lunch: null,
  snack: null,
  dinner: null,
  supper: null,
};
function mealReducer(state, action) {
  switch (action.type) {
    case "ADD_MEAL": {
      const newMeals = { ...state, [action.slot]: action.meal };
      localStorage.setItem("meals", JSON.stringify(newMeals));
      return newMeals;
    }
    case "REMOVE_MEAL": {
      const newMeals = { ...state, [action.slot]: null };
      localStorage.setItem("meals", JSON.stringify(newMeals));
      return newMeals;
    }
    default:
      return state;
  }
}
function calculateMacroTotals(mealState) {
  const meals = Object.values(mealState).filter((meal) => meal !== null);
  const macro = meals.reduce(
    (acc, meal) => {
      return {
        kcal: acc.kcal + meal.kcal,
        protein: acc.protein + meal.protein,
        fat: acc.fat + meal.fat,
        carbs: acc.carbs + meal.carbs,
      };
    },
    { kcal: 0, protein: 0, fat: 0, carbs: 0 }
  );
  return macro;
}
export default function MealContextProvider({ children }) {
  const [modalState, setModalState] = useState({ open: false, type: "" });
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [mealState, mealDispatch] = useReducer(mealReducer, mealsStorage);
  function handleShowModal(type) {
    setModalState({ open: true, type: type });
  }
  function handleCloseModal() {
    setModalState((prev) => {
      return { ...prev, open: false };
    });
  }
  function handleSetSelectedSlot(slot) {
    setSelectedSlot(slot);
  }
  function addMeal(meal) {
    mealDispatch({
      type: "ADD_MEAL",
      meal: meal,
      slot: selectedSlot,
    });
  }
  function removeMeal() {
    mealDispatch({
      type: "REMOVE_MEAL",
      slot: selectedSlot,
    });
  }
  const totals = calculateMacroTotals(mealState);
  const mealCtx = {
    userMeals: mealState,
    totals: totals,
    addMeal: addMeal,
    removeMeal: removeMeal,
    handleSetSelectedSlot: handleSetSelectedSlot,
    modalState: modalState,
    handleShowModal: handleShowModal,
    handleCloseModal: handleCloseModal,
  };
  return <MealContext value={mealCtx}>{children}</MealContext>;
}
