export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="p-1 rounded-sm text-sm text-[#333] bg-[#eee] md:text-base md:cursor-pointer"
    >
      {children}
    </button>
  );
}
