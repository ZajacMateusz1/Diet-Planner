import Header from "./components/Header.jsx";
import Meal from "./components/Meal.jsx";
import FindMealModal from "./components/FindMealModal.jsx";
import SummaryFooter from "./components/SummaryFooter.jsx";
function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-4 my-4">
        <Meal>Breakfast</Meal>
        <Meal>Lunch</Meal>
        <Meal>Snack</Meal>
        <Meal>Dinner</Meal>
        <Meal>Supper</Meal>
      </main>
      <SummaryFooter />
      {/* <FindMealModal /> */}
    </>
  );
}

export default App;
