import { useReducer, useState } from "react";
import MealContext from "./MealContext.jsx";
function mealReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      break;
  }
}
export default function MealContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [mealState, mealDispatch] = useReducer(mealReducer, {
    breakfast: null,
    lunch: null,
    snack: null,
    dinner: null,
    supper: null,
  });
  function handleShowModal() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }
  const mealCtx = {
    userMeals: mealState,
    showModal: showModal,
    handleShowModal: handleShowModal,
    handleCloseModal: handleCloseModal,
  };
  return <MealContext value={mealCtx}>{children}</MealContext>;
}
