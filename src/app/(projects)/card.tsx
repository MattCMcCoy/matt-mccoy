import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import clsx from 'clsx';
import { type z } from 'zod';
import { type ProjectSchema } from '~/server/db/projects';

import AgarIO from '../assets/agario.gif';
import CareWallet from '../assets/carewallet.gif';
import CoveyTown from '../assets/coveytown.gif';
import ExternalLink from '../assets/external-link.svg';
import Github from '../assets/github.svg';
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
  const router = useRouter();
  return (
    <div
      className="border-xl relative flex h-[60vh] w-[80vw] origin-top flex-col rounded-2xl border-2 border-portfolio-white-900 bg-portfolio-indigo_dye-400"
      style={{ top: `calc(-5vh + ${i * 45}px)` }}
    >
      <div className="mb-5 ml-2 mt-2 font-titillium text-3xl">
        {project.title}
      </div>
      <Image
        src={getGif(project.title).image}
        alt=""
        className={clsx(
          'mx-auto rounded-2xl border-none fill-none',
          project.mobile ? '' : 'h-[300px] w-[600px]'
        )}
        unoptimized
        width={project.mobile ? 175 : 350}
        height={project.mobile ? 175 : 200}
      />
      <div className="ml-2 mt-5 flex w-[98%] flex-row items-center">
        <div className="w-fit font-sans text-xl font-extrabold">about</div>
        <div className="ml-3 h-0 w-[90%] border-b border-portfolio-white-700" />
        <div className="mx-auto flex flex-row justify-center">
          {project.githuburl && (
            <div className="w-fit">
              <Image
                src={Github as StaticImport}
                width={40}
                height={40}
                alt=""
                color="white"
                className="text-portfolio-jet-900"
                onClick={() => router.push(project.githuburl ?? '')}
              />
            </div>
          )}
          {project.externalurl && (
            <div className="ml-auto w-fit">
              <Image
                src={ExternalLink as StaticImport}
                width={40}
                height={40}
                alt=""
                color="white"
                className="text-portfolio-jet-900"
                onClick={() => router.push(project.externalurl ?? '')}
              />
            </div>
          )}
        </div>
      </div>
      <div className="ml-2 mt-5 font-titillium text-lg font-light">
        {project.description}
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
