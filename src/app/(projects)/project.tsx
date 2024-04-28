'use client';

import { api } from '~/trpc/react';

import { SectionHeader } from '../_components/section-header';
import { Card } from './card';

export function Project() {
  const { data: project } = api.project.getAll.useQuery();

  return (
    <div>
      <div className="sticky top-0 z-20 bg-portfolio-jet-300">
        <SectionHeader title="Projects." />
      </div>
      <div className="bg-portfolio-jet-300">
        {project?.map((proj, index) => {
          return (
            <div
              key={proj.id}
              className="sticky top-0 flex h-[100vh] items-center justify-center"
            >
              <Card i={index} project={proj} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
