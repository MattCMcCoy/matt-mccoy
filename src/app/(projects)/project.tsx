'use client';

import { api } from '~/trpc/react';

import { ProjectCard } from './card';

export function Project() {
  const { data: project } = api.project.getAll.useQuery();

  return (
    <div className="mx-10 mr-auto mt-20">
      <div className="mb-5 w-fit border-b border-portfolio-indigo_dye-700 font-titillium text-5xl font-extrabold">
        Projects.
      </div>

      <div className="ml-auto flex w-[90vw] flex-row flex-wrap gap-4">
        {project?.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
