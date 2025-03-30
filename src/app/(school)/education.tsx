'use client';

import { api } from '~/trpc/react';

import { SectionHeader } from '../_components/section-header';
import { SchoolCard } from './card';

export function Education() {
  const { data: schools } = api.education.getAll.useQuery();
  return (
    <div className="mx-auto mr-auto mt-20">
      <SectionHeader title="Where I've Studied." />
      <div className="mt-10 flex flex-col flex-wrap gap-4">
        {schools?.map((school, index) => {
          return <SchoolCard key={school.id} school={school} index={index} />;
        })}
      </div>
    </div>
  );
}
