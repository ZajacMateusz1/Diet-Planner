import dietPlannerLogo from "../assets/DietPlannerLogo.png";
export default function Header() {
  return (
    <header className="flex h-1/6 justify-center gap-4 items-center bg-[#383838]">
      <div className="logo basis-1/4 md:basis-1/10">
        <img
          src={dietPlannerLogo}
          className="object-cover"
          alt="Diet Planner Logo"
        />
      </div>
      <h1 className="text-2xl font-bold uppercase tracking-wide md:text-4xl">
        Diet Planner
      </h1>
    </header>
  );
}
