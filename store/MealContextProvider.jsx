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
