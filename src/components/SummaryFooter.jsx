import { useContext } from "react";
import MealContext from "../../store/MealContext.jsx";
export default function SummaryFooter() {
  const { totals } = useContext(MealContext);
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#383838] p-4 text-center">
      <h2 className="text-xl capitalize pb-2 md:pb-4 md:text-2xl">
        Your daily totals
      </h2>
      <div className="total flex justify-around pb-4 max-w-[640px] mx-auto md:text-lg">
        <p>
          <span>Kcal</span>
          <span className="block">{totals.kcal}</span>
        </p>
        <p className="text-blue-500">
          <span>Protein</span>
          <span className="block">{totals.protein}</span>
        </p>
        <p className="text-yellow-400">
          <span>Fat</span>
          <span className="block">{totals.fat}</span>
        </p>
        <p className="text-violet-400">
          <span>Carbohydrates</span>
          <span className="block">{totals.carbs}</span>
        </p>
      </div>
    </footer>
  );
}
