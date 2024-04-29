'use client';

import { motion } from 'framer-motion';
import { api } from '~/trpc/react';

import { SectionHeader } from '../_components/section-header';
import { Card, PhoneCard } from './card';

export function Project() {
  const { data: featured } = api.project.getFeatured.useQuery();

  return (
    <div className="h-full w-full">
      <div className="mx-auto w-fit">
        <SectionHeader title="Some Things I've Worked On." />
      </div>
      <div className="mx-auto w-fit">
        {featured?.map((proj, index) => {
          return (
            <div key={index}>
              <div className="hidden lg:block">
                <Card i={index} project={proj} />
              </div>
              <div className="block lg:hidden">
                <PhoneCard project={proj} i={index} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-auto w-fit">
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
        View All Projects
      </motion.button>
    </div>
  );
}
