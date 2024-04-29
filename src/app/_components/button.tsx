import { motion } from 'framer-motion';

export function Button({ title }: { title: string }) {
  return (
    <div className="rounded-lg bg-portfolio-indigo_dye-700">
      <motion.button
        whileHover={{ scale: 1.1, translateX: -10, translateY: -5 }}
        className="rounded-lg border border-portfolio-indigo_dye-700 bg-portfolio-jet-400 p-2 font-titillium text-lg font-thin text-portfolio-indigo_dye-700"
      >
        {title}
      </motion.button>
    </div>
  );
}
