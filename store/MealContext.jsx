import { createContext } from "react";
const MealContext = createContext({
  userMeals: {},
  showModal: false,
  handleShowModal: () => {},
  handleCloseModal: () => {},
});
export default MealContext;
