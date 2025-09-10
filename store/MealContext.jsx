import { createContext } from "react";
const MealContext = createContext({
  userMeals: {},
  addMeal: () => {},
  removeMeal: () => {},
  handleSetSelectedSlot: () => {},
  modalState: false,
  handleShowModal: () => {},
  handleCloseModal: () => {},
});
export default MealContext;
