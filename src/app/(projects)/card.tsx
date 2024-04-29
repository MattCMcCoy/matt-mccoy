import Image from 'next/image';

import clsx from 'clsx';
import moment from 'moment';
import { type z } from 'zod';
import { type ProjectSchema } from '~/server/db/projects';

import AgarIO from '../assets/agario.gif';
import CareWallet from '../assets/carewallet.gif';
import CoveyTown from '../assets/coveytown.gif';
import Portfolio from '../assets/portfolio1.gif';
import StreamingAvailability from '../assets/streamingavailability.gif';
import Website from '../assets/website.gif';

export function Card({
  i,
  project
}: {
  i: number;
  project: z.infer<typeof ProjectSchema>;
}) {
  return (
    <div
      className={clsx(
        'relative my-20 flex h-fit w-[90vw] 2xl:w-[50vw]',
        i % 2 == 0 ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div className="h-[40vh] w-[60vw] 2xl:w-[40vw]">
        <div
          className={clsx(
            'flex flex-row font-titillium text-portfolio-white-800',
            i % 2 != 0 && 'ml-2 flex-row-reverse'
          )}
        >
          <div
            className={clsx(
              'w-fit font-titillium text-portfolio-indigo_dye-600',
              i % 2 != 0 && 'ml-auto'
            )}
          >
            Featured Project
          </div>
          <div className={clsx(i % 2 == 0 && 'ml-auto mr-2')}>
            {moment(project.endDate).format('YYYY')}
          </div>
        </div>
        <div
          className={clsx(
            'w-fit font-titillium text-3xl',
            i % 2 != 0 && 'ml-auto'
          )}
        >
          {project.title}
        </div>
      </div>
      <div className="absolute top-20 w-[50vw] font-titillium 2xl:w-[25vw]">
        <div className="rounded-lg  bg-portfolio-jet-500 p-5">
          {project.description}
        </div>
        <div
          className={clsx(
            'ml-2 mt-2 flex w-fit flex-row flex-wrap gap-2',
            i % 2 != 0 && 'ml-auto mr-2'
          )}
        >
          {project.languages.map((lang) => (
            <div
              className="font-leagueSpartan text-portfolio-white-600"
              key={`${project.title + lang}`}
            >
              {lang}
            </div>
          ))}
        </div>
      </div>

      <div className={clsx('mx-auto', project.mobile && 'w-full')}>
        <Image
          src={getGif(project.title).image}
          alt=""
          className={clsx(
            'mx-auto rounded-2xl',
            project.mobile ? '' : 'h-[30vw] w-[100vw] xl:h-[20vw] xl:w-[60vw]'
          )}
          unoptimized
          width={project.mobile ? 175 : 350}
          height={project.mobile ? 175 : 200}
        />
      </div>
    </div>
  );
}

export function PhoneCard({
  project
}: {
  i: number;
  project: z.infer<typeof ProjectSchema>;
}) {
  return (
    <div className="relative my-20 flex h-fit w-[90vw] flex-col xl:w-[50vw]">
      <div className="h-fit w-[60vw] xl:w-[40vw]">
        <div className="w-fit font-titillium text-portfolio-indigo_dye-600">
          Featured Project
        </div>
        <div className="w-[90vw] font-titillium text-3xl">{project.title}</div>
        <div className="flex flex-row flex-wrap gap-2">
          {project.languages.map((lang) => (
            <div
              className="font-leagueSpartan text-portfolio-white-600"
              key={`${project.title + lang}`}
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="absolute h-[40vw] w-[90vw] rounded-lg bg-portfolio-jet-500/60 p-5 font-titillium xl:w-[20vw]">
          {project.description}
        </div>
        <div className={'mx-auto h-full w-full'}>
          <Image
            src={getGif(project.title).image}
            alt=""
            className={clsx('mx-auto rounded-2xl', 'h-[40vw] w-[100vw]')}
            unoptimized
            width={project.mobile ? 175 : 350}
            height={project.mobile ? 175 : 200}
          />
        </div>
      </div>
    </div>
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
