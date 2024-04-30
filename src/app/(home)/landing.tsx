'use client';

import { api } from '~/trpc/react';

export function Landing() {
  const { data: landing, isLoading } = api.landing.get.useQuery();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="mx-auto my-auto">
      <div className="text-center font-montserrat text-2xl font-thin tracking-[2vw]">
        {landing?.name}
      </div>
      <div className="mt-5 flex flex-col gap-2">
        {landing?.tagline.map((tag) => (
          <div
            key={tag}
            className="text-center font-montserrat text-4xl font-bold"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
