export default function CircleButton({ children, color, ...props }) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: color,
      }}
      className={`text-xl rounded-full h-[4vh] w-[4vh] select-none md:cursor-pointer md:text-2xl`}
    >
      {children}
    </button>
  );
}
