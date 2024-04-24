import { ExperienceCard } from "../_components/card";

export function Experience() {
  return (
    <div className="mx-5">
      <div className="mb-5 w-fit border-b border-yellow-300 font-titillium text-5xl font-extrabold">
        Experience
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <ExperienceCard />
      </div>
    </div>
  );
}
