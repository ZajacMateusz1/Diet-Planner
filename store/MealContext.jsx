import { createContext } from "react";
const MealContext = createContext({
  userMeals: {},
  totals: 0,
  addMeal: () => {},
  removeMeal: () => {},
  handleSetSelectedSlot: () => {},
  modalState: false,
  handleShowModal: () => {},
  handleCloseModal: () => {},
});
export default MealContext;
