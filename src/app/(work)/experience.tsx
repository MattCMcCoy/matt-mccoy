"use client";

import React from "react";
import { api } from "~/trpc/react";
import { ExperienceCard } from "./card";

export function Experience() {
  const { data: experience } = api.experience.getAll.useQuery();

  return (
    <div className="mx-10 mr-auto mt-20">
      <div className="border-portfolio-indigo_dye-800 mb-5 w-fit border-b font-titillium text-5xl font-extrabold text-white">
        Experience.
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {experience?.map((exp) => {
          return (
            <ExperienceCard
              key={exp.id}
              title={exp.title ?? ""}
              startDate={exp.startDate ?? ""}
              endDate={exp.endDate ?? ""}
              image={exp.image ?? ""}
            />
          );
        })}
      </div>
    </div>
  );
}