"use client";

import { api } from "~/trpc/react";
import { ExperienceCard } from "../(work)/card";

export function Project() {
  const { data: project } = api.project.getAll.useQuery();
  return (
    <div className="mx-10 mr-auto mt-20">
      <div className="mb-5  w-fit border-b border-yellow-300 font-titillium text-5xl font-extrabold text-white">
        Projects.
      </div>
      <div className="flex flex-row flex-wrap gap-4"></div>
    </div>
  );
}
