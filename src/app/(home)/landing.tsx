'use client';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import { api } from '~/trpc/react';

export function Landing() {
  const { data: landing, isLoading } = api.landing.get.useQuery();
  const { data: repos } = api.github.get.useQuery();

  console.log(repos);
  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="mx-auto my-auto">
      <div className="mb-10 w-fit items-center font-montserrat text-2xl font-thin tracking-[3vw] lg:mx-auto">
        {landing?.name}
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="my-auto">
          <div className="flex flex-col gap-2">
            <AnimatePresence mode="wait">
              {landing?.tagline.map((tag, index) => (
                <motion.span
                  className="font-titillium font-extrabold text-portfolio-jet-300 lg:text-end"
                  style={{ WebkitTextStroke: '0.15px white' }}
                  key={tag}
                  animate={{
                    opacity: 1
                  }}
                  initial={{
                    opacity: 0,
                    fontSize: '30px'
                  }}
                  transition={{ duration: 3, delay: index * 0.5 }}
                >
                  {tag}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <Image
          src={repos?.avatar_url ?? ''}
          alt=""
          className="mt-5 rounded-xl lg:ml-5 lg:mt-0"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
