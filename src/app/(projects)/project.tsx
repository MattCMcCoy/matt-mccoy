"use client";

import { clsx } from "clsx";
import Image from "next/image";
import { api } from "~/trpc/react";

import Website from "../assets/website.gif";
import CareWallet from "../assets/carewallet.gif";
import Portfolio from "../assets/portfolio1.gif";
import CoveyTown from "../assets/coveytown.gif";
import StreamingAvailability from "../assets/streamingavailability.gif";
import AgarIO from "../assets/agario.gif";

export function Project() {
  const { data: project } = api.project.getAll.useQuery();

  return (
    <div className="mx-10 mt-20 lg:mr-auto">
      <div className="border-portfolio-indigo_dye-700  mb-5 w-fit border-b font-titillium text-5xl font-extrabold">
        Projects.
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {project?.map((project) => {
          return (
            <div
              key={project.id}
              className={clsx(
                "mt-20 flex w-full flex-col items-center justify-center gap-2 text-white lg:flex-row",
              )}
            >
              <div className="mr-10 flex flex-col">
                <div className="font-titillium text-3xl font-light">
                  {project.title}
                </div>
                <div className="w-[600px] font-titillium text-base font-light">
                  {project.description}
                </div>
              </div>
              <div className="mx-auto mr-auto h-fit">
                <Image
                  src={getGif(project.title).image}
                  alt=""
                  className={clsx(
                    "border-none fill-none",
                    project.mobile ? "" : "h-[20vh]",
                  )}
                  unoptimized
                  width={project.mobile ? 175 : 450}
                  height={project.mobile ? 175 : 200}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const getGif = (name: string) => {
  switch (name) {
    case "Generate's Website":
      return {
        image: Website,
      };
    case "Care-Wallet":
      return {
        image: CareWallet,
      };
    case "Portfolio":
      return {
        image: Portfolio,
      };
    case "Covey.Town - Checkers":
      return {
        image: CoveyTown,
      };
    case "Streaming Availability":
      return {
        image: StreamingAvailability,
      };
    case "Agar.io Clone":
      return {
        image: AgarIO,
      };
    default:
      return {
        image:
          "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjZyanplNzBsZDhmMWJjN2N3OXhpOXFwamhqd3VkcDVieWEwY3QyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TLeLKUdIc1tvAxb7ab/giphy.gif",
      };
  }
};
