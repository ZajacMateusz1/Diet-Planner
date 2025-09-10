import { useContext, useRef, useEffect } from "react";
import FindMealContent from "./FindMealContent.jsx";
import ConfirmRemoveContent from "./ConfirmRemoveContent.jsx";
import MealContext from "../../store/MealContext.jsx";
export default function Modal() {
  const { modalState, handleCloseModal } = useContext(MealContext);
  const modal = useRef();
  const modalToShow = modalState.type === "findMeal";
  useEffect(() => {
    if (modalState.open) modal.current.showModal();
    else modal.current.close();
  }, [modalState.open]);
  return (
    <dialog
      className={`bg-[#383838] text-white p-4 rounded fixed top-1/2 left-1/2 -translate-1/2 ${
        modalToShow ? "w-5/6 h-11/12 md:w-1/4" : ""
      }`}
      ref={modal}
      onClose={handleCloseModal}
    >
      {modalToShow ? <FindMealContent /> : <ConfirmRemoveContent />}
    </dialog>
  );
}
