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
        <Meal>breakfast</Meal>
        <Meal>lunch</Meal>
        <Meal>snack</Meal>
        <Meal>dinner</Meal>
        <Meal>supper</Meal>
      </main>
      <SummaryFooter />
      <FindMealModal />
    </MealContextProvider>
  );
}

export default App;
