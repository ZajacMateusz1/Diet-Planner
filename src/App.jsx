import Header from "./components/Header.jsx";
import Meal from "./components/Meal.jsx";
import FindMealModal from "./components/FindMealModal.jsx";
import SummaryFooter from "./components/SummaryFooter.jsx";
import MealContextProvider from "../store/MealContextProvider.jsx";
function App() {
  return (
    <MealContextProvider>
      <Header />
      <main className="flex flex-col items-center gap-4 my-4">
        <Meal>Breakfast</Meal>
        <Meal>Lunch</Meal>
        <Meal>Snack</Meal>
        <Meal>Dinner</Meal>
        <Meal>Supper</Meal>
      </main>
      <SummaryFooter />
      <FindMealModal />
    </MealContextProvider>
  );
}

export default App;
