import Image from 'next/image';

import clsx from 'clsx';
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
      className="border-xl relative flex h-[60vh] w-[80vw] origin-top flex-col rounded-2xl border border-portfolio-indigo_dye-700 bg-portfolio-jet-300"
      style={{ top: `calc(-5vh + ${i * 45}px)` }}
    >
      <div className="ml-2 mt-2 font-titillium text-3xl">{project.title}</div>
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
