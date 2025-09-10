import { createContext } from "react";
const MealContext = createContext({
  userMeals: {},
  addMeal: () => {},
  handleSetSelectedSlot: () => {},
  modalState: false,
  handleShowModal: () => {},
  handleCloseModal: () => {},
});
export default MealContext;
