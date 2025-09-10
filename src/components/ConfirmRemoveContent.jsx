import { useContext } from "react";
import MealContext from "../../store/MealContext";
import Button from "./Button.jsx";
export default function ConfirmRemoveContent() {
  const { handleCloseModal, removeMeal } = useContext(MealContext);
  return (
    <div className="bg-[#383838] text-white p-4 text-center">
      <h2 className="mb-4">Are you sure you want to delete this meal?</h2>
      <div className="buttons flex gap-4 justify-center">
        <Button
          onClick={() => {
            handleCloseModal();
            removeMeal();
          }}
        >
          Yes
        </Button>
        <Button onClick={handleCloseModal}>No</Button>
      </div>
    </div>
  );
}
