"use client";

import { api } from "~/trpc/react";

export function Landing() {
  const { data: landing } = api.landing.get.useQuery();

  return (
    <div>
      <div className="w-[80vw] items-center pb-10 text-center text-white">
        <div className="font-titillium text-4xl font-thin tracking-[1.5vw]">
          {landing?.name}
        </div>
        <div className="font-titillium text-6xl font-semibold lg:text-8xl">
          {landing?.tagline}
        </div>
      </div>
      <div>
        <div className="mt-5 flex flex-row items-center">
          <div className="font-titillium text-2xl font-semibold">About</div>
          <div className="border-portfolio-indigo_dye-700 ml-3 h-1 w-full border-b" />
        </div>
        <div className="mt-5 w-[80vw] text-wrap font-titillium text-lg font-light lg:w-[50vw] 2xl:w-[40vw]">
          {landing?.about}
        </div>
      </div>
    </div>
  );
}
