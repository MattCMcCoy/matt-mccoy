"use client";

import { api } from "~/trpc/react";

export function Project() {
  const { data: project } = api.project.getAll.useQuery();

  return (
    <div className="mx-10 mr-auto mt-20">
      <div className="border-portfolio-indigo_dye-700  mb-5 w-fit border-b font-titillium text-5xl font-extrabold">
        Projects.
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {project?.map((project) => {
          return (
            <div
              key={project.id}
              className="flex w-full flex-col gap-2 text-white"
            >
              <div className="font-titillium text-3xl font-light">
                {project.title}
              </div>
              <div className="font-titillium text-base font-light">
                {project.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
