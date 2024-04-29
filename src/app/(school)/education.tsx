'use client';

import Image from 'next/image';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import moment from 'moment';
import { api } from '~/trpc/react';

import { SectionHeader } from '../_components/section-header';
import Khoury from '../assets/khoury-white.png';
import Northeastern from '../assets/northeasternuniversity.png';

export function Education() {
  const { data: schools } = api.education.getAll.useQuery();
  return (
    <div className="mx-auto mr-auto mt-20">
      <SectionHeader title="Where I've Studied." />
      <div className="mt-10 flex flex-row flex-wrap gap-4">
        {schools?.map((school, index) => {
          return (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              viewport={{ once: true }}
              className={clsx(
                'group relative flex h-[50vw] w-full items-center justify-center rounded-xl md:h-[300px]'
              )}
            >
              <Image
                className="h-full w-full rounded-xl opacity-35 transition-all ease-in-out"
                src={Northeastern}
                alt=""
              />
              <div className="bg-black absolute z-10 h-full w-full rounded-xl opacity-40 transition-all ease-in-out group-hover:opacity-80" />
              <Image
                className="absolute z-30 h-[30%] w-[40%] transition-all ease-in-out group-hover:h-[20%] group-hover:w-[30%] group-hover:-translate-y-12 md:h-[100px]"
                src={Khoury}
                alt=""
              />
              <div className="absolute z-30 flex flex-col items-center text-3xl opacity-0 transition-all ease-in-out group-hover:translate-y-12 group-hover:opacity-100">
                <h1 className="text-wrap text-center font-titillium font-light drop-shadow-[0px_1px_1px_rgba(0,0,0,2)]">
                  {school.degree}
                </h1>
                <h3 className="mt-3 font-titillium text-base font-light drop-shadow-[0px_1px_1px_rgba(0,0,0,2)]">
                  {`${moment(school.endDate).isAfter(moment()) ? 'Expected: ' : ''} ${moment(school.endDate).format('MMM. YYYY')}`}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
