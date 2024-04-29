'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { api } from '~/trpc/react';

import { SectionHeader } from '../_components/section-header';
import { ExperienceCard } from './card';

export function Experience() {
  const { data: experience } = api.experience.getFeatured.useQuery();

  return (
    <div className="mx-10 mt-20">
      <div className="">
        <SectionHeader title="Experience." />
      </div>
      <div className="mt-10 flex w-[50vw] flex-row flex-wrap gap-4">
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
      <div className="mx-auto mt-10 w-fit">
        <Button />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="rounded-lg bg-portfolio-indigo_dye-700">
      <motion.button
        whileHover={{ scale: 1.1, translateX: -10, translateY: -5 }}
        className="rounded-lg border border-portfolio-indigo_dye-700 bg-portfolio-jet-400 p-2 font-titillium text-lg font-thin text-portfolio-indigo_dye-700"
      >
        View All My Experience
      </motion.button>
    </div>
  );
}
