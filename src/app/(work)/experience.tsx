'use client';

import React from 'react';

import { api } from '~/trpc/react';

import { SectionHeader } from '../_components/section-header';
import { ExperienceCard } from './card';

export function Experience() {
  const { data: experience } = api.experience.getAll.useQuery();

  return (
    <div className="mx-10 mr-auto mt-20">
      <div className="sticky top-0 z-20 bg-portfolio-jet-300">
        <SectionHeader title="Experience." />
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {experience?.map((exp) => {
          return (
            <ExperienceCard
              key={exp.id}
              title={exp.title ?? ''}
              startDate={exp.startDate ?? ''}
              endDate={exp.endDate ?? ''}
              image={exp.image ?? ''}
            />
          );
        })}
      </div>
    </div>
  );
}
