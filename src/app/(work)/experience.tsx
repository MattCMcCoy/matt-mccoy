'use client';

import React from 'react';

import { api } from '~/trpc/react';

import { Button } from '../_components/button';
import { SectionHeader } from '../_components/section-header';
import { ExperienceCard } from './card';

export function Experience() {
  const { data: experience } = api.experience.getFeatured.useQuery();

  return (
    <div className="mx-10 mt-20">
      <div className="">
        <SectionHeader title="Places I've Worked At." />
      </div>
      <div className="mt-10 flex w-[50vw] flex-row flex-wrap gap-4">
        {experience?.map((exp, index) => {
          return (
            <ExperienceCard
              key={exp.id}
              title={exp.title ?? ''}
              startDate={exp.startDate ?? ''}
              endDate={exp.endDate ?? ''}
              image={exp.image ?? ''}
              index={index}
            />
          );
        })}
      </div>
      <div className="mx-auto mt-10 w-fit">
        <Button title="View All My Experience" />
      </div>
    </div>
  );
}
