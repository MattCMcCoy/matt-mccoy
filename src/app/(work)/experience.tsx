'use client';

import React from 'react';

import { api } from '~/trpc/react';

import { Button } from '../_components/button';
import { SectionHeader } from '../_components/section-header';
import { ExperienceCard } from './card';

export function Experience() {
  const { data: experience } = api.experience.getFeatured.useQuery();

  return (
    <div className="mx-auto mr-auto mt-20 w-[90%] max-w-[1200px]">
      <SectionHeader title="Where I've Worked." />
      <div className="mt-10 flex flex-col gap-4">
        {experience?.map((job, index) => {
          return <ExperienceCard key={job.id} job={job} index={index} />;
        })}
      </div>
      <div className="mx-auto mt-10 w-fit">
        <Button title="View All My Experience" />
      </div>
    </div>
  );
}
