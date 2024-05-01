'use client';

import Link from 'next/link';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { GoLinkExternal } from 'react-icons/go';
import { api } from '~/trpc/react';

export function Landing() {
  const { data: landing, isLoading } = api.landing.get.useQuery();
  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="video-background pointer-events-none">
        <iframe
          title="droneVideo"
          src="https://www.youtube.com/embed/51vb3znOZrQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=51vb3znOZrQ"
          className="border-0"
          seamless
        />
      </div>
      <div className="absolute z-20">
        <div className="flex flex-row">
          <div>
            <div className="mb-1 w-[45vw] items-center font-montserrat text-2xl font-extrabold tracking-[1vw]">
              {landing?.name}
            </div>
            <div className="mb-10 w-[45vw] items-center font-montserrat text-base font-light tracking-[0.4vw]">
              {landing?.currentTitle}
            </div>
            <div className="flex flex-col gap-2">
              <AnimatePresence mode="wait">
                {landing?.tagline.map((tag, index) => (
                  <motion.span
                    className="font-titillium font-light tracking-[0.4vw]"
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
          <div>
            <div className="w-[35vw] font-montserrat text-base font-bold tracking-[0.2vw]">
              {landing?.about}
            </div>
            <div className="mr-auto mt-5 flex w-full flex-row gap-2 border-t border-portfolio-indigo_dye-800 pt-5">
              <Link href={''} target="_blank">
                <FiLinkedin
                  size={24}
                  className="hover:cursor-pointer hover:text-portfolio-indigo_dye-600"
                />
              </Link>
              <Link href={''} target="_blank">
                <FiGithub
                  size={24}
                  className="hover:cursor-pointer hover:text-portfolio-indigo_dye-600"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
