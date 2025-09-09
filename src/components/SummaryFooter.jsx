export default function SummaryFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#383838] p-4 text-center">
      <h2 className="text-xl capitalize pb-2 md:pb-4 md:text-2xl">
        Your daily totals
      </h2>
      <div className="total flex justify-around pb-4 max-w-[640px] mx-auto md:text-lg">
        <p>
          <span>Kacal</span>
          <span className="block">3600</span>
        </p>
        <p className="text-blue-500">
          <span>Protein</span>
          <span className="block">250</span>
        </p>
        <p className="text-yellow-400">
          <span>Fat</span>
          <span className="block">100</span>
        </p>
        <p className="text-violet-400">
          <span>Carbohydrates</span>
          <span className="block">450</span>
        </p>
      </div>
    </footer>
  );
}
