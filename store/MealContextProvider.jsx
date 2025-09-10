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
export default function MealContextProvider({ children }) {
  const [modalState, setModalState] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [mealState, mealDispatch] = useReducer(mealReducer, {
    breakfast: null,
    lunch: null,
    snack: null,
    dinner: null,
    supper: null,
  });
  function handleShowModal() {
    setModalState(true);
  }
  function handleCloseModal() {
    setModalState(false);
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
  const mealCtx = {
    userMeals: mealState,
    addMeal: addMeal,
    removeMeal: removeMeal,
    handleSetSelectedSlot: handleSetSelectedSlot,
    modalState: modalState,
    handleShowModal: handleShowModal,
    handleCloseModal: handleCloseModal,
  };
  return <MealContext value={mealCtx}>{children}</MealContext>;
}
