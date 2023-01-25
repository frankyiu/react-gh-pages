import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.5, 1.5, 2, 1],
        opacity: [0.1, 0.4, 0.5, 0.3, 1.0],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center top-24 "
    >
      <div className="absolute  rounded-full border border-[#003B00] h-[550px] w-[550px] animate-pulse"></div>
      <div className="absolute  rounded-full border  border-[#008F11] h-[400px] w-[400px] animate-pulse"></div>
      <div className="absolute  rounded-full border  border-[#003B00] h-[250px] w-[250px] animate-pulse"></div>
    </motion.div>
  );
}

export default BackgroundCircle;
