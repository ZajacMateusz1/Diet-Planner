import { useReducer, useState } from "react";
import MealContext from "./MealContext.jsx";
function mealReducer(state, action) {
  switch (action.type) {
    case "ADD_MEAL":
      return { ...state, [action.slot]: { meal: action.meal, quantity: 100 } };
    case "REMOVE_MEAL":
      return { ...state, [action.slot]: null };
    default:
      return state;
  }
}
function calculateMacroTotals(mealState) {
  const meals = Object.values(mealState).filter((meal) => meal !== null);
  const kcal = meals.reduce((acc, { meal }) => acc + meal.kcal, 0);
  const protein = meals.reduce((acc, { meal }) => acc + meal.protein, 0);
  const fat = meals.reduce((acc, { meal }) => acc + meal.fat, 0);
  const carbs = meals.reduce((acc, { meal }) => acc + meal.carbs, 0);
  return { kcal, protein, fat, carbs };
}
export default function MealContextProvider({ children }) {
  const [modalState, setModalState] = useState({ open: false, type: "" });
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [mealState, mealDispatch] = useReducer(mealReducer, {
    breakfast: null,
    lunch: null,
    snack: null,
    dinner: null,
    supper: null,
  });
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
