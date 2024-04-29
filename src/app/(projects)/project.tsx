'use client';

import { api } from '~/trpc/react';

import { SectionHeader } from '../_components/section-header';
import { Card, PhoneCard } from './card';

export function Project() {
  const { data: featured } = api.project.getFeatured.useQuery();
  const { data: others } = api.project.getOther.useQuery();

  return (
    <div className="h-full w-full">
      <div className="w-fit">
        <SectionHeader title="Some Things I Built." />
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
      <div>
        <SectionHeader title="Other Notable Projects." />
      </div>
    </div>
  );
}
