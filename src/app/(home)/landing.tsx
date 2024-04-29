'use client';

import { api } from '~/trpc/react';

export function Landing() {
  const { data: landing, isLoading } = api.landing.get.useQuery();

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <div className="text-white w-[50vw] items-center pb-10 text-center">
        <div className="animate-blurred-fade-in font-titillium text-2xl font-thin tracking-[3vw] animate-duration-1000">
          {landing?.name}
        </div>
        <div className="font-lobster text-8xl font-extrabold lg:text-8xl">
          {landing?.tagline}
        </div>
      </div>
      <div>
        <div className="mt-5 flex flex-row items-center">
          <div className="font-leagueSpartan text-lg font-semibold">about</div>
          <div className="ml-3 h-1 w-full border-b border-portfolio-indigo_dye-700" />
        </div>
        <div className="mt-5 w-[80vw] animate-fade-in-right text-wrap font-titillium text-lg font-light animate-duration-1000 animate-ease-in lg:w-[50vw] 2xl:w-[30vw]">
          {landing?.about}
        </div>
      </div>
    </div>
  );
}
