'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { Glow } from '@codaworks/react-glow';
import clsx from 'clsx';

import AgarIO from '../assets/agario.gif';
import CareWallet from '../assets/carewallet.gif';
import CoveyTown from '../assets/coveytown.gif';
import Portfolio from '../assets/portfolio1.gif';
import StreamingAvailability from '../assets/streamingavailability.gif';
import Website from '../assets/website.gif';
import { useIsVisible } from '../utils/isVisible';

export function ProjectCard({
  project
}: {
  project: {
    id: number;
    title: string;
    position: string;
    organization: string;
    startDate: string;
    endDate: string;
    image: string;
    mobile: boolean;
    githuburl: string;
    description: string;
  };
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(elementRef);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    }
  }, [isVisible]);

  return (
    <Glow>
      <div
        ref={elementRef}
        key={project.id}
        className="flex h-[500px] w-[90vw] flex-col gap-2 rounded-lg glow:bg-portfolio-indigo_dye-700/40 xl:w-[400px]"
      >
        <div className="m-auto h-[490px] w-[89vw] items-center bg-portfolio-jet-100 xl:w-[390px]">
          <div
            className={clsx(
              'mb-2 mt-5 w-fit font-titillium text-3xl font-light',
              visible && 'animate-fade-in-right animate-duration-700'
            )}
          >
            {project.title}
          </div>
          <div
            className={clsx(
              'mb-10 mt-5 flex flex-col',
              visible && 'animate-fade-in-up items-center animate-duration-700'
            )}
          >
            <Image
              src={getGif(project.title).image}
              alt=""
              className={clsx(
                'border-none fill-none',
                project.mobile ? '' : 'h-[300px] w-[600px]'
              )}
              unoptimized
              width={project.mobile ? 175 : 350}
              height={project.mobile ? 175 : 200}
            />
            {visible && (
              <div className="absolute top-60 w-full bg-portfolio-jet-100">
                <div className="mt-5 flex flex-row items-center">
                  <div className="font-titillium font-semibold">About</div>
                  <div className="ml-3 h-1 w-[60%] border-b border-portfolio-indigo_dye-700" />
                </div>
                <div
                  className={clsx(
                    'h-28 w-fit overflow-hidden text-ellipsis text-wrap font-titillium text-lg',
                    visible && 'animate-fade-in-right animate-duration-1000'
                  )}
                >
                  {project.description}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Glow>
  );
}

const getGif = (name: string) => {
  switch (name) {
    case "Generate's Website":
      return {
        image: Website
      };
    case 'Care-Wallet':
      return {
        image: CareWallet
      };
    case 'Portfolio':
      return {
        image: Portfolio
      };
    case 'Covey.Town - Checkers':
      return {
        image: CoveyTown
      };
    case 'Streaming Availability':
      return {
        image: StreamingAvailability
      };
    case 'Agar.io Clone':
      return {
        image: AgarIO
      };
    default:
      return {
        image:
          'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjZyanplNzBsZDhmMWJjN2N3OXhpOXFwamhqd3VkcDVieWEwY3QyMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TLeLKUdIc1tvAxb7ab/giphy.gif'
      };
  }
};
