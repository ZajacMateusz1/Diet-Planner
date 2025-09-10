import { useReducer, useState } from "react";
import MealContext from "./MealContext.jsx";
function mealReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, [action.slot]: action.meal };
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
      type: "ADD_ITEM",
      meal: meal,
      slot: selectedSlot,
    });
  }
  const mealCtx = {
    userMeals: mealState,
    addMeal: addMeal,
    handleSetSelectedSlot: handleSetSelectedSlot,
    modalState: modalState,
    handleShowModal: handleShowModal,
    handleCloseModal: handleCloseModal,
  };
  return <MealContext value={mealCtx}>{children}</MealContext>;
}
