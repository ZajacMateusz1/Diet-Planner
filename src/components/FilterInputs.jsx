export default function FilterInputs({
  minFilter,
  maxFilter,
  filters,
  handleSearch,
}) {
  return (
    <div className="mb-4 text-center text-sm md:text-base">
      <input
        type="number"
        className="bg-[#eee] p-1 text-black rounded-sm mr-4 w-1/4"
        value={filters[minFilter]}
        onChange={(e) => {
          handleSearch(
            e.target.value === "" ? "" : Math.max(+e.target.value, 0),
            minFilter
          );
        }}
        placeholder={minFilter}
      />
      <input
        type="number"
        className="bg-[#eee] p-1 text-black rounded-sm w-1/4"
        value={filters[maxFilter]}
        onChange={(e) => {
          handleSearch(
            e.target.value === "" ? "" : Math.max(+e.target.value, 0),
            maxFilter
          );
        }}
        placeholder={maxFilter}
      />
    </div>
  );
}
