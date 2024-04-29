import Image from 'next/image';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import moment from 'moment';

import GenerateBG from '../assets/generate-bg.jpg';
import Generate from '../assets/generate.png';
import HighResBioBG from '../assets/highres-bg.jpg';
import HighResBio from '../assets/highres.jpeg';
import KhouryBG from '../assets/khoury-bg.png';
import Khoury from '../assets/khoury.png';
import Northeastern from '../assets/northeastern.png';
import SymboticBG from '../assets/symbotic-bg.jpeg';
import Symbotic from '../assets/symbotic.png';

export interface ExperienceCardProps {
  title: string;
  startDate: string;
  endDate: string;
  image: string;
  index: number;
}

export function ExperienceCard(props: ExperienceCardProps) {
  const image = getImage(props.image);
  return (
    <motion.div
      initial={{ opacity: 0, x: props.index % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className={clsx(
        'group relative flex h-[50vw] w-full items-center justify-center rounded-xl md:h-[300px]'
      )}
    >
      <Image
        className="h-full w-full rounded-xl transition-all ease-in-out"
        src={image?.imageBG ?? ''}
        alt=""
      />
      {image?.school && (
        <Image
          className="absolute bottom-3 right-3 z-50 h-20 w-20 rounded-xl transition-all ease-in-out"
          src={image?.school ?? ''}
          alt=""
        />
      )}
      <div className="bg-black absolute z-10 h-full w-full rounded-xl opacity-40 transition-all ease-in-out group-hover:opacity-80" />
      <Image
        className="absolute z-30 h-[30%] w-[40%] transition-all ease-in-out group-hover:h-[20%] group-hover:w-[30%] group-hover:-translate-y-12 md:h-[100px]"
        src={image?.image ?? ''}
        alt=""
      />
      <div className="absolute z-30 flex flex-col items-center text-3xl opacity-0 transition-all ease-in-out group-hover:translate-y-12 group-hover:opacity-100">
        <h1 className="text-wrap text-center font-titillium font-light drop-shadow-[0px_1px_1px_rgba(0,0,0,2)]">
          {props.title}
        </h1>
        <h3 className="mt-3 font-titillium text-base font-light drop-shadow-[0px_1px_1px_rgba(0,0,0,2)]">
          {`${moment(props.startDate).isAfter(moment()) ? 'Start Date: ' : ''} ${moment(props.startDate).format('MMM. YYYY')} ${props.endDate ? `- ${moment(props.endDate).format('MMM. YYYY')}` : props.endDate !== '' ? `- Present` : ''}`}
        </h3>
      </div>
    </motion.div>
  );
}

const getImage = (name: string) => {
  switch (name) {
    case 'symbotic':
      return {
        image: Symbotic,
        imageBG: SymboticBG
      };
    case 'highresbio':
      return {
        image: HighResBio,
        imageBG: HighResBioBG
      };
    case 'generate':
      return {
        image: Generate,
        imageBG: GenerateBG,
        school: Northeastern
      };
    case 'khoury':
      return {
        image: Khoury,
        imageBG: KhouryBG,
        school: Northeastern
      };
  }
};
