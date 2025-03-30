'use client';

import Link from 'next/link';

import { api } from '~/trpc/react';

import { Button } from '../_components/button';
import { SectionHeader } from '../_components/section-header';
import { Card, PhoneCard } from './card';

export function Project() {
  const { data: featured } = api.project.getFeatured.useQuery();

  return (
    <div className="h-full w-full">
      <div className="mx-auto w-fit">
        <SectionHeader title="Some Things I've Worked On." />
      </div>
      <div className="mx-auto flex h-fit w-fit flex-col gap-5 lg:mt-20 lg:gap-20">
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
      <div className="mx-auto mt-10 w-fit">
        <Link href={'/projects'}>
          <Button title="View All Projects" />
        </Link>
      </div>
    </div>
  );
}
